
import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';

import { IS_ANDROID } from './../../../utilities/Defaults';
import { POP } from './../../../router/actions';
import BackButtoniOS from './../../../components/BackButtoniOS/BackButtoniOS';

class View1Detail extends Component {

    static navigationOptions = () => {
        const options = {
            title: 'View1Detail'
        };

        if (!IS_ANDROID) {
            return {
                ...options,
                headerLeft: <BackButtoniOS />
            };
        }

        return options;
    };

    render() {
        return (
            <View>
                <Text>View1Detail</Text>
                <Button
                    title='Back'
                    onPress={() => this.props.navigation.dispatch({ type: POP })}
                />
            </View>
        );
    }
}

export default View1Detail;
