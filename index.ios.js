import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
  Image,
  NavigatorIOS
} from 'react-native';

import Main from './App/Components/main';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red'
  }
});

class phoneBookReactNative extends Component {

  render() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'Contacts',
          component: Main
        }}
      />
    )
  }
}

AppRegistry.registerComponent('phoneBookReactNative', () => phoneBookReactNative);
