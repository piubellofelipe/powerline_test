import {
    ACTIONS
} from '../actions/types'

export const getObjects = () => {
   return (dispatch) => {
        dispatch({type: ACTIONS.ADDRESSES_GET_OBJECTS, payload: ''})
   } 
}