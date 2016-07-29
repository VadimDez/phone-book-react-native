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
import NavigationBar from 'react-native-navbar';

class Contact extends Component {

  constructor() {
    super();

    this.contact = {};
    this.titleConfig = {
      title: 'Contact'
    }
  }

  goBackHandler() {
    this.props.navigator.pop();
  }

  editHandler() {
    this.props.navigator.push({
      id: 'edit'
    });
  }

  renderScene() {
    return (
      <View style={styles.view}>
        <NavigationBar
          leftButton={{ title: 'Back', handler: this.goBackHandler.bind(this) }}
          title={this.titleConfig}
          rightButton={{ title: 'Edit', handler: this.editHandler.bind(this) }}
        />
        <Text>contact information</Text>
        <Image
          source={{ uri: this.contact.uri }}
          style={ styles.contactImage }
        />
        <Text>id: { this.contact.id }</Text>
      </View>
    )
  }

  render() {
    this.contact = this.context.store.getState().main.activeContact;

    return (
      <Navigator
        renderScene={this.renderScene.bind(this)}
      />
    )
  }
}

const styles = StyleSheet.create({
  view: {
    flex: 1
  },
  contactImage: {
    width: 50,
    height: 50,
    backgroundColor: '#e3e3e3'
  }
});

Contact.contextTypes = {
  store: React.PropTypes.object
};

export default Contact