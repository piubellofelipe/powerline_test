import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import AddressList from './components/addressList';
import AdressForm from './components/addressForm';

import {address} from './actions';

const RouterComponent = () => {
    return (
        <Router>
            <Scene key='main'>
                <Scene
                    key='addressList'
                    component={AddressList}
                    title='Addresses'
                    rightTitle='Add'
                    onRight={() => Actions.addressForm({formType: 'create'})}
                    initial
                />
                <Scene key='addressForm' title='Address Form' component={AdressForm} />
            </Scene>
        </Router>
    );
};

export default RouterComponent;
