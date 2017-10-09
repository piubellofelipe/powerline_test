
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

// redux + navigation imports
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import reducers from './reducers';
import RouterComponent from './router';


const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

export default class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <RouterComponent />
      </Provider>
    );
  }
}