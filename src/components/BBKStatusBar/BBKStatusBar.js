
import React from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';

import { IS_ANDROID } from './../../utilities/Defaults';

export default ({ backgroundColor, ...props }) => (
  <View style={[styles.statusBar, { backgroundColor }]}>
    <StatusBar translucent backgroundColor={backgroundColor} {...props} />
  </View>
);

const styles = StyleSheet.create({
  statusBar: {
    height: IS_ANDROID ? StatusBar.currentHeight : 20
  }
});
