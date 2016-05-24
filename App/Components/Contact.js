/**
 * Created by Vadym Yatsyuk on 24/05/16
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  Text,
  Navigator
} from 'react-native';

export default class Contact extends Component {

  renderScene() {
    return (
      <View>
        <Text>contact</Text>
      </View>
    )
  }

  render() {
    return (
      <Navigator
        renderScene={this.renderScene.bind(this)}
      />
    )
  }
}