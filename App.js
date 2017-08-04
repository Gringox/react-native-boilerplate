import React, { Component } from 'react';
import { StyleSheet, View, StatusBar, Platform } from 'react-native';

import { Router } from './src/Router';

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
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  },
});
