
import React, { Component } from 'react';
import { Button, View, StatusBar } from 'react-native';

import { IS_ANDROID } from './../../utilities/Defaults';

class Login extends Component {

    static navigationOptions = () => ({
        header: null
    });

    render() {
        const { navigation } = this.props;
        const statusBarStyle = IS_ANDROID ? 'light-content' : 'dark-content';
        return (
            <View>
                <StatusBar barStyle='dark-content' translucent={false} />
                <Button
                    title='Login'
                    onPress={() => navigation.navigate('mainTab')}
                />
            </View>
        );
    }
}

export default Login;
