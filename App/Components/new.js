/**
 * Created by Vadym Yatsyuk on 01/08/16
 */

import React, { Component } from 'react';
import NavigationBar from 'react-native-navbar';
import {
  AppRegistry,
  View,
  Text,
  TextInput,
  Navigator,
  StyleSheet,
  Image
} from 'react-native';

class New extends Component {
  renderScene() {
    return (
      <NavigationBar title={{ title: 'New Contact' }} />
    )
  }

  render() {
    return (
      <Navigator renderScene={ this.renderScene.bind(this) } />
    )
  }
}

export default New;