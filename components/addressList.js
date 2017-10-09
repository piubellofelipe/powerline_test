import React, {Component} from 'react';
import {View, Text} from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import {address} from '../actions';

class AddressList extends Component{
    componentDidMount(){
        this.props.getObjects();
        console.log(this.props);
    }
    render(){
        return <View>
            <Text>
                This is our list.
            </Text>
        </View>
    }
}


const mapStateToProps = (reducer) => {
    return {};
};

export default connect(mapStateToProps, {
    getObjects: address.getObjects
})(AddressList);