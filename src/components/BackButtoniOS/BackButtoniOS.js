
import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default ({ onPress }) =>
    <TouchableOpacity onPress={onPress}>
        <View style={styles.containerStyle}>
                <FontAwesome name='angle-left' size={40} color='white' />
                <Text style={styles.textStyle}>
                    Back
                </Text>
        </View>
    </TouchableOpacity>
;

const styles = {
    containerStyle: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 4
    },
    textStyle: {
        fontSize: 17,
        textAlign: 'center',
        marginLeft: 4,
        color: 'white'
    }
};
