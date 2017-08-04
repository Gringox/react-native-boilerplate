
import React, { Component } from 'react';
import { Button, View } from 'react-native';

class Login extends Component {

    static navigationOptions = () => ({
        header: null
    });

    render() {
        const { navigation } = this.props;
        return (
            <View>
                <Button
                    title='Login'
                    onPress={() => navigation.navigate('mainTab')}
                />
            </View>
        );
    }
}

export default Login;
