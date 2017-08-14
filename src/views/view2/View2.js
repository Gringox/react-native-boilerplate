

import React, { Component } from 'react';
import { Text, View } from 'react-native';

import TabNavigatorShadow from './../../components/TabNavigatorShadow/TabNavigatorShadow';

class View2 extends Component {

    static navigationOptions = {
        title: 'View2'
    };

    render() {
        return (
            <View>
                <TabNavigatorShadow />
                <Text>View2</Text>
            </View>
        );
    }
}

export default View2;
