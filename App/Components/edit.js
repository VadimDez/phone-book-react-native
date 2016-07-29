/**
 * Created by Vadym Yatsyuk on 29/07/16
 */

import React, { Component } from 'react';
import NavigationBar from 'react-native-navbar';
import {
  AppRegistry,
  View,
  Text,
  Navigator,
  StyleSheet,
  Image
} from 'react-native';

export default class Edit extends Component {
  renderScene() {
    return (
      <View>
        <NavigationBar
          leftButton={{ title: 'Back', handler: () => { this.props.navigator.pop(); } }}
          title={{title: 'Edit'}}
        />
        <Text>Edit view</Text>
      </View>
    )
  }

  render() {
    return (
      <Navigator renderScene={ this.renderScene.bind(this) } />
    )
  }
}