import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
  Image,
  Navigator
} from 'react-native';

import Main from './App/Components/main';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red'
  }
});

class phoneBookReactNative extends Component {

  _renderScene(route, navigator) {
    if (route.id === 'contacts') {
      return <Main />
    }
  }

  render() {
    return (
      <Navigator
        style={styles.container}
        initialRoute={{
          id: 'contacts'
        }}
        renderScene={this._renderScene}
      />
    )
  }
}

AppRegistry.registerComponent('phoneBookReactNative', () => phoneBookReactNative);
