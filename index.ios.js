/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';

import ActivityIndicatorComponent  from './ComponentDemoJS/indicator';
import ButtonComponent  from './ComponentDemoJS/button';


export default class ReactNativeComponentDemo extends Component {
  constructor(props){
    super(props);
    this.state={
      //生成随机颜色
      randomColor:'#'+('00000'+(Math.random()*0x1000000<<0).toString(16)).slice(-6),
    }
  }

  render() {
    return (

      <ScrollView>
      {
        ButtonComponent.ButtonModel.map((buttonArray)=>{
          return  (
             <View>
              <Text style={styles.buttonTitle}>{buttonArray.title}</Text>
             <Text style={{fontSize:14}}>{buttonArray.description}</Text>
            <View style={{backgroundColor:this.state.randomColor}} >{buttonArray.render()}</View>
            </View>);

        })
      }
    </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  buttonTitle:{
    marginTop:30,
    fontSize:14,
    textAlign:'left'
  },
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
});

AppRegistry.registerComponent('ReactNativeComponentDemo', () => ReactNativeComponentDemo);
