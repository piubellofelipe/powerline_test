import {
    ACTIONS
} from '../actions/types'

import firebase from 'firebase';

// fetch addresses from our firebase
export const getObjects = () => {
   return (dispatch) => {
        // console.log('hey yal');
        firebase.database().ref(`/addresses`).once('value', (res) => {
            // console.log('ressss', res);
            dispatch({type: ACTIONS.ADDRESS_GET_OBJECTS, payload: res.val()})
            // console.log('hello', res.val())
        });
   } 
}

export const createObject = (input) => {
   return (dispatch) => {
        firebase.database().ref(`/addresses`).push(input);
        Actions.pop({type: 'reset'});
   } 
}

export const inputChanged = ({id, value}) => {
    return (dispatch) => {
        dispatch({type: ACTIONS.ADDRESS_INPUT_CHANGED, payload: {id, value}})
    }
}

export const prepareForm = () => {

}

export const finishForm = (input, id) => {
    return (dispatch) => {
        if (id){
            // console.log('editing...');
        } else {
            console.log('creating....');
            firebase.database().ref('/addresses').push(input);

        }
        console.log(input);
        dispatch({type: ACTIONS.ADDRESS_ON_SAVE_FORM, payload: {}})
    }
}

