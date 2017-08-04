
import React, { Component } from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';

import Login from './views/login/Login';
import View1 from './views/view1/View1';
import View2 from './views/view2/View2';
import View3 from './views/view3/View3';
import View4 from './views/view4/View4';

const MainTabNavigator = TabNavigator({
    view1: { screen: View1 },
    view2: { screen: View2 },
    view3: { screen: View3 },
    view4: { screen: View4 }
}, {
    navigationOptions: {
        headerLeft: null,
        gesturesEnabled: false
    }
});

const RootNavigator = StackNavigator({
    login: { screen: Login },
    mainTab: { screen: MainTabNavigator }
});

export class Router extends Component {
    render() {
        return (
            <RootNavigator />
        );
    }
}
