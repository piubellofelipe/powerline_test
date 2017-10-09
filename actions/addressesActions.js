import {
    ACTIONS
} from '../actions/types'
import { Actions } from 'react-native-router-flux';

import firebase from 'firebase';

// fetch addresses from our firebase
export const getObjects = () => {
   return (dispatch) => {
        firebase.database().ref(`/addresses`).once('value', (res) => {
            dispatch({type: ACTIONS.ADDRESS_GET_OBJECTS, payload: res.val()})
        });
   } 
}

export const inputChanged = ({id, value}) => {
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

