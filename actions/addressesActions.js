import {
    ACTIONS
} from '../actions/types'

import firebase from 'firebase';

// fetch addresses from our firebase
export const getObjects = () => {
   return (dispatch) => {
        // console.log('hey yal');
        firebase.database().ref(`/addresses`).once('value', (res) => {
            // console.log('ressss');
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

export const inputChanged = (key, value) => {
    return (dispatch) => {
        dispatch({type: ACTIONS.INPUT_CHANGED, payload: {key, value}})
    }
}

export const prepareForm = () => {

}

