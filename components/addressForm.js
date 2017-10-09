import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { inputChanged } from '../actions';
import { CardSection, Input } from './common';

class AddressForm extends Component {
    render () {
        console.log(this.props);
        return (
            <View>
                <CardSection>
                    <Input
                        label='streetName'
                        placeholder='Street Name'
                        value={this.props.streetName}
                        onChangeText={value => this.props.inputChanged({ id: 'streetName', value: value })}
                    />
                </CardSection>
                <CardSection>
                    <Input
                        label='Ward'
                        placeholder='Ward'
                        value={this.props.ward}
                        onChangeText={value => this.props.inputChanged({ id: 'ward', value: value })}
                    />
                </CardSection>
                <CardSection>
                    <Input
                        label='district'
                        placeholder='District'
                        value={this.props.district}
                        onChangeText={value => this.props.inputChanged({ id: 'district', value: value })}
                    />
                </CardSection>
                <CardSection>
                    <Input
                        label='City'
                        placeholder='City'
                        value={this.props.city}
                        onChangeText={value => this.props.inputChanged({ id: 'city', value: value })}
                    />
                </CardSection>
                <CardSection>
                    <Input
                        label='Country'
                        placeholder='Country'
                        value={this.props.country}
                        onChangeText={value => this.props.inputChanged({ id: 'country', value: value })}
                    />
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
    name: state.address.streetName,
    ward: state.address.ward,
    district: state.address.district,
    city: state.address.city,
    country: state.address.country,
});

export default connect(mapStateToProps, { inputChanged })(AddressForm);
