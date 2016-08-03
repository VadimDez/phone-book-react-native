/**
 * Created by Vadym Yatsyuk on 21/05/16
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
  Image,
  Navigator,
  TouchableOpacity
} from 'react-native';
import NavigationBar from 'react-native-navbar';
import { SET_ACTIVE_CONTACT } from './../../actionTypes';

const defaultImage = 'https://www.bankofenglandearlycareers.co.uk/media/2747/blank-profile.jpg';

class Main extends Component {

  constructor(props) {
    super(props);

    this.dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2,
      enableEmptySections: false
    });

    this.titleConfig = {
      title: 'Contacts'
    };
  }

  componentDidMount() {
  }

  renderContactRow(contact, _, index) {
    const handlePress = () => {

      this.context.store.dispatch({
        type: SET_ACTIVE_CONTACT,
        contact,
        index: parseInt(index, 10)
      });

      this.props.navigator.push({ id: 'contact' });
    };

    return (
      <TouchableOpacity onPress={ handlePress }>
        <View style={ styles.contactRow }>
          <Image
            source={{ uri: contact.uri }}
            style={styles.contactImage}
          />
          <View style={ styles.contactInfo }>
            <Text>{ contact.name }</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }

  addNewHandler() {
    this.props.navigator.push({ id: 'new' });
  }

  renderScene() {
    const state = this.context.store.getState();
    this.dataSource = this.dataSource.cloneWithRows(state.main.contacts);

    return (
      <View style={styles.view}>
        <NavigationBar
          style={ styles.navBar }
          title={ this.titleConfig }
          rightButton={{ title: '+', handler: this.addNewHandler.bind(this) }}
        />
        <ListView
          dataSource={ this.dataSource }
          renderRow={ this.renderContactRow.bind(this) }
          style={ styles.listView }
        />
      </View>
    )
  }

  render() {
    return (
      <Navigator
        renderScene={this.renderScene.bind(this)}
      />
    );
  }
}

const styles = StyleSheet.create({
  view: {
    flex: 1
  },
  navBar: {
    borderBottomColor: '#e3e3e3',
    borderBottomWidth: 1,
  },
  listView: {
  },
  contactRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  contactImage: {
    width: 50,
    height: 50,
    backgroundColor: '#e3e3e3'
  },
  contactInfo: {
    margin: 5
  }
});

Main.contextTypes = {
  store: React.PropTypes.object
};

export default Main