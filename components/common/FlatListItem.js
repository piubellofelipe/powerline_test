// import libraries for making a Component
import React from 'react';
import { Text, View } from 'react-native';
import {Button} from './Button';
// Make a component
const ListItem = (props) => {
    const { textStyle, viewStyle, dividerStyle, buttonContainer } = styles;
    return (
        <View>
            <View style={viewStyle}>
                <Text style={textStyle}>{props.text}</Text>
                <View style={buttonContainer}>
                    <Button textStyle={{fontSize: 12, paddingTop: 12}} buttonStyle={{}} onPress={() => props.onRightIconClick()}>
                        {props.rightIconText}
                    </Button>
                </View>
            </View>
            <View style={dividerStyle} />
        </View>
    );
};

const styles = {
    viewStyle: {
        backgroundColor: '#FFF',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        paddingLeft: 32,
        height: 60,
        shadowColor: '#ccc',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'
    },
    dividerStyle: {
        backgroundColor: '#ccc',
        height: 1,
        width: '100%'
    },
    textStyle: {
        fontSize: 20
    },
    buttonContainer: {
        width: 55,
        height: 40,
        marginRight: 0
    }
};
// Make the Component available to other parts of the App

export default ListItem;
