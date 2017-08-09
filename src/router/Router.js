
import React, { Component } from 'react';
import { addNavigationHelpers } from 'react-navigation';
import { createStore } from 'redux';
import { connect, Provider } from 'react-redux';
import { BackHandler } from 'react-native';

import { POP } from './actions';
import MainStackNavigator from './config';
import RouterReducer from './reducers';

class Router extends Component {

    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', () => {
            const { nav, dispatch } = this.props;
            if (nav.routes.length <= 2) {
                return false;
            }
            dispatch({ type: POP });
            return true;
        });
    }

    render() {
        return (
            <MainStackNavigator
                navigation={addNavigationHelpers({
                    dispatch: this.props.dispatch,
                    state: this.props.nav,
                })}
            />
        );
    }
}

const mapStateToProps = ({ nav }) => ({ nav });

const RouterWithNavigationState = connect(mapStateToProps)(Router);

const store = createStore(RouterReducer);

export default () =>
    <Provider store={store}>
        <RouterWithNavigationState />
    </Provider>
;
