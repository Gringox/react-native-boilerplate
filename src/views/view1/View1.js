
import React, { Component } from 'react';
import { Text, View } from 'react-native';

class View1 extends Component {

    static navigationOptions = {
        title: 'View1'
    };

    render() {
        return (
            <View>
                <Text>View1</Text>
            </View>
        );
    }
}

export default View1;
