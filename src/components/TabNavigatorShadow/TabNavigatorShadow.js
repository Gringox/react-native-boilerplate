
import React from 'react';
import { View, Dimensions } from 'react-native';

export default () =>
    <View 
        style={{
            height: 0.2,
            width: Dimensions.get('window').width,
            shadowColor: 'black',
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.2,
            elevation: 3,
            backgroundColor: '#787877'
        }} 
    />
;
