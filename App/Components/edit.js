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

class Edit extends Component {

  constructor(props) {
    super(props);
    this.contact = {};
  }

  goBackHandler() {
    this.props.navigator.pop();
  }

  renderScene() {
    return (
      <View>
        <NavigationBar
          leftButton={{ title: 'Back', handler: this.goBackHandler.bind(this) }}
          title={{title: 'Edit'}}
        />
        <Text>Edit name</Text>
        <TextInput
          style={ styles.textInput }
          value={ this.contact.name }
        />
      </View>
    )
  }

  render() {
    this.contact = this.context.store.getState().main.activeContact;

    return (
      <Navigator renderScene={ this.renderScene.bind(this) } />
    )
  }
}

Edit.contextTypes = {
  store: React.PropTypes.object
};

export default Edit;