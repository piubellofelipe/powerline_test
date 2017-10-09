import {
  ACTIONS
} from '../actions/types'
const INITIAL_STATE = {
  input: {

  },
  list: null,
  error: false,
  errorMessage: null
}

export default (state = INITIAL_STATE, action) => {
    console.log(action);
  switch (action.type) {
    default:
      return state
  }
}