
import { NavigationActions } from 'react-navigation';
import { combineReducers } from 'redux';

import { PUSH, POP } from './actions';
import MainStackNavigator from './config';

const initialState = MainStackNavigator
                                    .router
                                    .getStateForAction(
                                        MainStackNavigator.router.getActionForPathAndParams('login')
                                    );

const navReducer = (state = initialState, action) => {
    let nextState;
    switch (action.type) {

        case PUSH:
            nextState = MainStackNavigator.router.getStateForAction(
                NavigationActions.navigate({ routeName: action.routeName }),
                state
            );
            break;

        case POP:
            nextState = MainStackNavigator.router.getStateForAction(
                NavigationActions.back(), 
                state
            );
            break;

        default:
            nextState = MainStackNavigator.router.getStateForAction(action, state);
            break;
    }

    // Simply return the original `state` if `nextState` is null or undefined.
    return nextState || state;
};

const routerReducer = combineReducers({ nav: navReducer });

export default routerReducer;
