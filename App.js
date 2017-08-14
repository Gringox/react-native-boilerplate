import React, { Component } from 'react';
import { View } from 'react-native';

import { IS_ANDROID, BELLBANK_COLOR } from './src/utilities/Defaults';
import Router from './src/router/Router';
import BBKStatusBar from './src/components/BBKStatusBar/BBKStatusBar';

export default class App extends Component {

  renderCustomStatusBar() {
    if (!IS_ANDROID) {
      return <View />;
    }
    
    return (
      <BBKStatusBar
        backgroundColor={BELLBANK_COLOR}
        barStyle="light-content"
      />
    );
  }
  
  render() {
    return (
      <View style={{ flex: 1 }}>
        { this.renderCustomStatusBar() }
        <Router />
      </View>
    );
  }
}
