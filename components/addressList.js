import React, {Component} from 'react';
import {View, Text, FlatList} from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import {address} from '../actions';
import FlatListItem from './common/FlatListItem'
import { Spinner} from './common';

class AddressList extends Component{

    componentWillMount () {
        this.prepareList = [];
        this.props.getObjects();
    }

    componentWillReceiveProps (nextProps) {
        // console.log(nextProps);
        // if (nextProps.)
        if (nextProps.items) {
            let preparedList = Object.keys(nextProps.items).map((key) => {
                let newItem = {
                    key,
                    primary: nextProps.items[key].streetName,
                    secondary: nextProps.items[key].city
                };
                return newItem;
            });
            this.addressList = preparedList;
        }
    }

    prepareList (list) {
        this.addressList = list;
    }

    render () {
        if (this.props.items){
            return (
                <FlatList
                data={this.addressList}
                renderItem={({item}) => <FlatListItem text={item.primary + ' - ' + item.secondary} rightIconText={'edit'} onRightIconClick={() => Actions.addressForm({formType: 'edit', id: item.key})} />}
                />
            );
        } else {
            return <Spinner />;
        }
    }
}


const mapStateToProps = (reducer) => ({
    items: reducer.address.list
});

export default connect(mapStateToProps, {
    getObjects: address.getObjects
})(AddressList);


