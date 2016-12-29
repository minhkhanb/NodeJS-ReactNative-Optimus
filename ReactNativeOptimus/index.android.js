/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
//B1:import library
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Navigator
} from 'react-native';

//B2: code Class(Component):Render
class ReactNativeOptimus extends Component {

  renderScene(route, navigator){
    switch (route.name) {
      case "do": return (<ManHinhDo clickBack={()=>{navigator.pop({
        name:"vang"
      })}} sName={route.passProps.name} sAge={route.passProps.age}/>);
      case "vang": return (<ManHinhVang clickMe={()=>{navigator.push({
        name:"do",
        passProps: {
          name: 'John',
          age: 90
        }
      })}} />);
    }
  }

  render() {
    return (
      <Navigator initialRoute={{name:"vang"}} renderScene={this.renderScene} />
    );
  }
}

class ManHinhDo extends Component{
  render() {
    return(
      <View style={{backgroundColor: 'red', flex:1}}>
        <Text style={{color: 'black'}}>{this.props.sName} - {this.props.sAge}</Text>
        <TouchableOpacity onPress={this.props.clickBack} style={{marginLeft:20,alignItems:'center',width:100,height:20,marginTop:100,backgroundColor:'yellow'}}>
          <Text style={{alignItems:'center',color:'red'}}>Back Scene</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

class ManHinhVang extends Component{
  render() {
    return(
      <View style={{backgroundColor: 'yellow', flex:1}}>
        <TouchableOpacity onPress={this.props.clickMe} style={{marginLeft:20,alignItems:'center',width:100,height:20,marginTop:100,backgroundColor:'red'}}>
          <Text style={{alignItems:'center',color:'white'}}>Next Scene</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

//B3 Register Component chinh
AppRegistry.registerComponent('ReactNativeOptimus', () => ReactNativeOptimus);
