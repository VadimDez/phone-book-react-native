/**
 * Created by Vadym Yatsyuk on 29/07/16
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

const styles = StyleSheet.create({
  textInput: {
    height: 40
  }
});

export default class Edit extends Component {

  constructor(props) {
    super(props);
    this.contact = {};
  }

  renderScene() {
    let data = 'asd'
    return (
      <View>
        <NavigationBar
          leftButton={{ title: 'Back', handler: () => { this.props.navigator.pop(); } }}
          title={{title: 'Edit'}}
        />
        <Text>Edit view</Text>
        <TextInput
          style={ styles.textInput }
          value={ '' + this.contact.id }
        />
      </View>
    )
  }

  render() {
    this.contact = this.props.contact;

    return (
      <Navigator renderScene={ this.renderScene.bind(this) } />
    )
  }
}