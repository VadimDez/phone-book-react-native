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
  NavigatorIOS
} from 'react-native';

class Main extends Component {

  constructor(props) {
    super(props);

    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
        enableEmptySections: false
      })
    }
  }

  componentDidMount() {
    const img = 'https://www.bankofenglandearlycareers.co.uk/media/2747/blank-profile.jpg';

    this.setState({
      dataSource: this.state.dataSource.cloneWithRows([
        {
          id: 1,
          uri: img
        },{
          id: 2,
          uri: img
        },{
          id: 3,
          uri: img
        }
      ])
    });
  }

  renderContactRow(data) {
    return (
      <View style={styles.contactRow}>
        <Image
          source={{uri: data.uri}}
          style={styles.contactImage}
        />
        <View style={styles.contactInfo}>
          <Text>Contact {data.id}</Text>
        </View>
      </View>
    );
  }

  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderContactRow}
        style={styles.listView}
      />
    );
  }
}

const styles = StyleSheet.create({
  listView: {
    // paddingTop: 20,
  },
  contactRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'green'
  },
  contactImage: {
    width: 50,
    height: 50,
    backgroundColor: 'red'
  },
  contactInfo: {
    margin: 5
  }
});

export default Main