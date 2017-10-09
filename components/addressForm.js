import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import {address} from '../actions';
import { CardSection, Input, Button } from './common';

class AddressForm extends Component {

    componentDidMount(){
        console.log(this.props);
        if (this.props.formType === 'edit') {
            this.props.prepareForm(this.props.id);
        } else {
            this.props.prepareForm(null);
        }
    }


    // dispatches the action to create or to edit the address
    onButtonPress(){
        // if our form is creating, we dont send an id, if we are editing, we send the id of the address to be edited
        this.props.finishForm(this.props.input, this.props.formType === 'create' ? null : this.props.id);
    }

    // dispatches the action to get geo location data
    onGeoButtonPress(){
        this.props.getGeoLocation();
    }

    render () {
        // console.log(this.props);
        return (
            <View>
                <CardSection>
                    <Input
                        label='streetName'
                        placeholder='Street Name'
                        value={this.props.input.streetName}
                        onChangeText={value => this.props.inputChanged({ id: 'streetName', value: value })}
                    />
                </CardSection>
                <CardSection>
                    <Input
                        label='Ward'
                        placeholder='Ward'
                        value={this.props.input.ward}
                        onChangeText={value => this.props.inputChanged({ id: 'ward', value: value })}
                    />
                </CardSection>
                <CardSection>
                    <Input
                        label='district'
                        placeholder='District'
                        value={this.props.input.district}
                        onChangeText={value => this.props.inputChanged({ id: 'district', value: value })}
                    />
                </CardSection>
                <CardSection>
                    <Input
                        label='City'
                        placeholder='City'
                        value={this.props.input.city}
                        onChangeText={value => this.props.inputChanged({ id: 'city', value: value })}
                    />
                </CardSection>
                <CardSection>
                    <Input
                        label='Country'
                        placeholder='Country'
                        value={this.props.input.country}
                        onChangeText={value => this.props.inputChanged({ id: 'country', value: value })}
                    />
                </CardSection>
                <CardSection>
                    <Button textStyle={{paddingBottom: 10}} onPress={() => this.onButtonPress()}>
                      {this.props.formType === 'create' ? 'Create' : 'Edit'}
                    </Button>
                    <Button  textStyle={{paddingBottom: 10}} onPress={() => this.onGeoButtonPress()}>
                        Get GeoLocation
                    </Button>
                </CardSection>
            </View>
        );
    }
}
const styles = {
    pickerTextStyle: {
        fontSize: 18,
        paddingLeft: 20
    }
};

const mapStateToProps = (state) => ({
    input : state.address.input
});

export default connect(mapStateToProps, 
    { 
        inputChanged : address.inputChanged,
        finishForm: address.finishForm,
        prepareForm: address.prepareForm,
        getGeoLocation: address.getGeoLocation
    })(AddressForm);
