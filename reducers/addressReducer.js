import {
  ACTIONS
} from '../actions/types'
import _ from 'lodash';

const INITIAL_STATE = {
  input: {
    streetName: '',
    ward: '',
    district: '',
    city: '',
    country: '',
  },
  list: null,
  error: false,
  errorMessage: null
}

export default (state = INITIAL_STATE, action) => {
    console.log(action);
    switch (action.type) {
        case ACTIONS.ADDRESS_INPUT_CHANGED: {
            let prevState = _.cloneDeep(state);
            prevState.input[action.payload.id] = action.payload.value;
            console.log(prevState, prevState.input[action.payload.id]);
            return { ...prevState };
        }
        default:
        return state
    }
}