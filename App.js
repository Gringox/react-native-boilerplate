import React, { Component } from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';

import { IS_ANDROID } from './src/utilities/Defaults';
import Router from './src/router/Router';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Router />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
