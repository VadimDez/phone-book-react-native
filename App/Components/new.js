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
import { connect } from 'react-redux';

import { ADD_CONTACT } from './../../actionTypes';

const styles = StyleSheet.create({
  view: {
    paddingLeft: 10,
    paddingRight: 10
  },
  input: {
    height: 30,
    borderColor: '#e3e3e3',
    borderWidth: 1,
    paddingLeft: 5,
    paddingRight: 5
  }
});

class New extends Component {
  backHandler() {
    this.props.navigator.pop();
  }

  addHandler() {

    this.props.onCreateNewContact({
      id: 100,
      name: 'asd',
      number: 123123123,
      uri: 'https://www.bankofenglandearlycareers.co.uk/media/2747/blank-profile.jpg'
    });
    this.props.navigator.pop();
  }

  renderScene() {
    return (
      <View style={ styles.view }>
        <NavigationBar
          leftButton={{ title: 'Back', handler: this.backHandler.bind(this) }}
          title={{ title: 'New Contact' }}
          rightButton={{ title: 'Add', handler: this.addHandler.bind(this) }}
        />
        <Text>Name</Text>
        <TextInput
          keyboardType={'default'}
          style={ styles.input }
        />

        <Text>Number</Text>
        <TextInput
          keyboardType={'numeric'}
          style={ styles.input }
        />
      </View>
    )
  }

  render() {
    return (
      <Navigator renderScene={ this.renderScene.bind(this) } />
    )
  }
}

New.contextTypes = {
  store: React.PropTypes.object
};

New.propTypes = {
  onCreateNewContact: React.PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  return {}
};

const mapDispatchToProps = (dispatch) => {
  return {
    onCreateNewContact: (contact) => {
      dispatch({
        type: ADD_CONTACT,
        value: contact
      })
    }
  }
};

const ConnectedNew = connect(
  mapStateToProps,
  mapDispatchToProps
)(New);

export default ConnectedNew;