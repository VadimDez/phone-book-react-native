import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView
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
      <View>
        <Text>Contact {data}</Text>
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
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  listView: {
    paddingTop: 20,
  },
});

AppRegistry.registerComponent('phoneBookReactNative', () => phoneBookReactNative);
