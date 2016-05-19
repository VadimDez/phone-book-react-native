import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
  Image
} from 'react-native';

class phoneBookReactNative extends Component {
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
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows([1, 2, 3])
    });
  }

  renderContactRow(data) {
    return (
      <View style={styles.contactRow}>
        <Image style={styles.contactImage} />
        <View style={styles.contactInfo}>
          <Text>Contact {data}</Text>
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
    paddingTop: 20,
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

AppRegistry.registerComponent('phoneBookReactNative', () => phoneBookReactNative);
