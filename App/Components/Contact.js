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
import { connect } from 'react-redux';

class Contact extends Component {

  constructor() {
    super();
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
    console.log(this.props.contact);
    return (
      <View style={styles.view}>
        <NavigationBar
          leftButton={{ title: 'Back', handler: this.goBackHandler.bind(this) }}
          title={{ title: 'Contact' }}
          rightButton={{ title: 'Edit', handler: this.editHandler.bind(this) }}
        />
        <View style={ styles.container }>
          <Image
            source={{ uri: this.props.contact.uri }}
            style={ styles.contactImage }
          />
          <View style={ styles.contactInfo }>
            <Text>Number: { this.props.contact.number }</Text>
            <Text>Name: { this.props.contact.name }</Text>
          </View>
        </View>
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

const styles = StyleSheet.create({
  view: {
    flex: 1
  },
  container: {
    flexDirection: 'row'
  },
  containerInfo: {
    flexDirection: 'column'
  },
  contactImage: {
    width: 50,
    height: 50,
    marginRight: 20,
    backgroundColor: '#e3e3e3'
  }
});

const mapStateToProps = (state) => {
  return {
    contact: state.main.activeContact
  };
};

const ContactConnected = connect(
  mapStateToProps
)(Contact);

export default ContactConnected;