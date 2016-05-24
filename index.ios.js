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
import Contact from './App/Components/Contact';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red'
  }
});

class phoneBookReactNative extends Component {

  _renderScene(route, navigator) {
    if (route.id === 'contacts') {
      return <Main navigator={navigator} />;
    }
    
    if (route.id === 'contact') {
      return <Contact navigator={navigator} />;
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
        configureScene={(route) => {
            if (route.sceneConfig) {
              return route.sceneConfig;
            }
            return Navigator.SceneConfigs.FloatFromRight;
          }}
      />
    )
  }
}

AppRegistry.registerComponent('phoneBookReactNative', () => phoneBookReactNative);
