

import React, { Component } from 'react';
import { Text, View } from 'react-native';

import TabNavigatorShadow from './../../components/TabNavigatorShadow/TabNavigatorShadow';

class View3 extends Component {

    static navigationOptions = {
        title: 'View3'
    };

    render() {
        return (
            <View>
                <TabNavigatorShadow />
                <Text>View3</Text>
            </View>
        );
    }
}

export default View3;
