
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ListView
} from 'react-native';

export default class NativeImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'Hello TextInput'
    };

    this.ds = new ListView.DataSource({rowHasChanged:(r1, r2)=>r1!=r2});
  }
  render() {
    return (
      <View>
        <Image source={require('./images/1.jpg')} style={styles.image} />
        <Image style={styles.imageexternal} source={{uri:'https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-9/14079924_314804102199660_8791161910425398377_n.jpg?oh=8a6a9e1235817376e52715ae9a8b737b&oe=58E2A907'}} />
        <View>
          <TextInput onChangeText={(text)=> this.setState({text})} value={this.state.text} style={styles.input}></TextInput>
          <Text>{this.state.text}</Text>
        </View>
        <View>
          <ListView
            dataSource={
              this.ds.cloneWithRows([
                {ten: "Mary", age: 22},
                {ten: "Lucky", age: 21},
                {ten: "Jennifer", age: 23}
              ])
            }
              renderRow={(rowData)=>{
                return(
                  <View style={{padding:10,borderTopColor:'green'}}>
                    <Text>{rowData.ten}</Text>
                    <Text>{rowData.age}</Text>
                  </View>
                );
              }
            }
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    width: 180,
    height: 180
  },
  imageexternal: {
    width: 120,
    height: 120
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1
  }
});

AppRegistry.registerComponent('NativeImage', () => NativeImage);
