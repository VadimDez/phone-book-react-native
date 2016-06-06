/**
 * Created by Vadym Yatsyuk on 24/05/16
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  Text,
  Navigator,
  StyleSheet,
  Image
} from 'react-native';

export default class Contact extends Component {

  constructor() {
    super();

    this.contact = {};
  }

  renderScene() {
    return (
      <View style={styles.view}>
        <Text>contact information</Text>
        <Image
          source={{uri: this.contact.uri}}
          style={styles.contactImage}
        />
        <Text>id: { this.contact.id }</Text>
      </View>
    )
  }

  render() {
    this.contact = this.props.contact;

    return (
      <Navigator
        renderScene={this.renderScene.bind(this)}
      />
    )
  }
}

const styles = StyleSheet.create({
  view: {
    paddingTop: 20
  },
  contactImage: {
    width: 50,
    height: 50,
    backgroundColor: 'green'
  }
});