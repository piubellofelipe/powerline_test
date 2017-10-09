import {
    ACTIONS
} from '../actions/types'
import { Actions } from 'react-native-router-flux';
import axios from 'axios';
import firebase from 'firebase';

const GEO_KEY = 'AIzaSyBtm17doFbHlcUxy9lHQTS7PN0Zdhm65_k';

// fetch addresses from our firebase
export const getObjects = () => {
   return (dispatch) => {
        firebase.database().ref(`/addresses`).once('value', (res) => {
            dispatch({type: ACTIONS.ADDRESS_GET_OBJECTS, payload: res.val()})
        });
   } 
}

export const inputChanged = ({id, value}) => {
    console.log('inputchanged', id, value);
    return (dispatch) => {
        dispatch({type: ACTIONS.ADDRESS_INPUT_CHANGED, payload: {id, value}})
    }
}

export const prepareForm = (id) => {
    return (dispatch) => {
        dispatch({type: ACTIONS.ADDRESS_PREAPARE_FORM, payload: id})
    }
}

export const finishForm = (input, id) => {
    return (dispatch) => {
        if (id){
            firebase.database().ref(`/addresses/${id}`).set(input);
        } else {
            firebase.database().ref('/addresses').push(input);
            getObjects();
        }
        Actions.pop({type: 'reset'});
    }
}

export const getGeoLocation = () => {
    return (dispatch) => {
        navigator.geolocation.getCurrentPosition(position => {
            console.log('got position');
            axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${position.coords.latitude},${position.coords.longitude}&result_type=street_address&key=${GEO_KEY}`).then(
                response => {
                    console.log('got data');
                    let arr = [streetName, city, ward, country] = ([...response.data.results[0].formatted_address.split(',')]);
                    let input = ({streetName, city, ward, country});
                    dispatch({type: ACTIONS.ADDRESS_SET_INPUT, payload: input});
                }
            )
            
        })
    }
}

