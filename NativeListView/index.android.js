
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView
} from 'react-native';

var DATA = [
  {
    name: "Noke",
    age: 22
  },
  {
    name: "Nadn",
    age: 23
  },
  {
    name: "Nood",
    age: 25
  }
];

export default class NativeListView extends Component {
  constructor(props) {
    super(props);
    var ds = new ListView.DataSource({rowHasChanged: (r1,r2)=>r1!=r2});
    this.state = {
      dataSource: ds.cloneWithRows(DATA)
    }
  }

  renderRow(property) {
    return(
      <View>
        <Text>{property.name}</Text>
        <Text>{property.age}</Text>
      </View>
    );
  }

  render() {
    return (
      <View style={{paddingTop:50}}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderRow}
        />
      </View>
    );
  }
}

AppRegistry.registerComponent('NativeListView', () => NativeListView);
