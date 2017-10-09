
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import firebase from 'firebase';

// redux + navigation imports
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import reducers from './reducers';
import RouterComponent from './router';


const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

export default class App extends Component {
  componentWillMount(){
    // firebase basic setup
    var config = {
        apiKey: "AIzaSyAPsp3M6n10Hj8zgAtUOk6sdI3beahQxGY",
        authDomain: "addresses-a1040.firebaseapp.com",
        databaseURL: "https://addresses-a1040.firebaseio.com",
        projectId: "addresses-a1040",
        storageBucket: "",
        messagingSenderId: "415952123450"
      };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={store}>
        <RouterComponent />
      </Provider>
    );
  }
}