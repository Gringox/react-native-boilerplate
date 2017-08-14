
import { 
    StackNavigator, 
    TabNavigator, 
} from 'react-navigation';
import { StatusBar } from 'react-native';

import Login from './../views/Login/Login';
import View1 from './../views/View1/View1';
import View2 from './../views/View2/View2';
import View3 from './../views/View3/View3';
import View4 from './../views/View4/View4';
import View1Detail from './../views/View1/View1Detail/View1Detail';
import { IS_ANDROID, BELLBANK_COLOR } from './../utilities/Defaults';

const MainTabNavigator = TabNavigator({
    view1: { screen: View1 },
    view2: { screen: View2 },
    view3: { screen: View3 },
    view4: { screen: View4 }
}, {
    // For stack navigator (header)
    navigationOptions: {
        headerLeft: null,
        gesturesEnabled: false
    },
    // For tab navigator (menu)
    tabBarOptions: {
        style: {
            backgroundColor: IS_ANDROID ? BELLBANK_COLOR : null
        },
        // Line at the bottom of the tab
        indicatorStyle: {
            backgroundColor: 'white'
        }
    }
});

const MainStackNavigator = StackNavigator({
    login: { screen: Login },
    mainTab: { screen: MainTabNavigator },
    view1Detail: { screen: View1Detail }
}, {
    navigationOptions: {
        headerStyle: {
            backgroundColor: BELLBANK_COLOR,
            elevation: 0,
            //paddingTop: IS_ANDROID ? StatusBar.currentHeight : 15
        },
        headerTintColor: 'white' 
    }
});

export default MainStackNavigator;
