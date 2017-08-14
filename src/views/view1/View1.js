
import _ from 'lodash';
import React, { Component } from 'react';
import { Text, View, Button, StatusBar } from 'react-native';

import { PUSH } from './../../router/actions';
import TabNavigatorShadow from './../../components/TabNavigatorShadow/TabNavigatorShadow';

class View1 extends Component {

    static navigationOptions = {
        title: 'View1'
    };

    render() {
        return (
            <View>
                <StatusBar barStyle='light-content' />
                <TabNavigatorShadow />
                <Text>View1</Text>
                <Button
                    title='Go to View 1 Detail'
                    onPress={_.debounce(() => this.props.navigation.dispatch({
                        type: PUSH,
                        routeName: 'view1Detail'
                    }), 100)}
                />
            </View>
        );
    }
}

export default View1;
