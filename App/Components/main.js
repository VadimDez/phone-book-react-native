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

class Main extends Component {

  constructor(props) {
    super(props);

    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
        enableEmptySections: false
      })
    };

    this.titleConfig = {
      title: 'Contacts'
    };
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
    const handlePress = () => {
      this.props.navigator.push({
        id: 'contact',
        passProps: {
          contact: data || {}
        }
      });
    };

    return (
      <TouchableOpacity onPress={handlePress}>
        <View style={styles.contactRow}>
          <Image
            source={{uri: data.uri}}
            style={styles.contactImage}
          />
          <View style={styles.contactInfo}>
            <Text>Contact {data.id}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }

  renderScene() {
    return (
      <View style={styles.view}>
        <NavigationBar title={this.titleConfig} />
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderContactRow.bind(this)}
          style={styles.listView}
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