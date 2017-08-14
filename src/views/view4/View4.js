
import React, { Component } from 'react';
import { Text, View } from 'react-native';

import TabNavigatorShadow from './../../components/TabNavigatorShadow/TabNavigatorShadow';

class View4 extends Component {

    static navigationOptions = {
        title: 'View4'
    };

    render() {
        return (
            <View>
                <TabNavigatorShadow />
                <Text>View4</Text>
            </View>
        );
    }
}

export default View4;
