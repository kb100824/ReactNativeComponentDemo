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


export default class ReactNativeComponentDemo extends Component {
  render() {
    return (

      <ScrollView>
         {
          ActivityIndicatorComponent.indicatorModel.map((array)=>{
            return  ( <View><Text style={{marginTop:20,fontSize:14}}>{array.title}</Text><View >{array.render()}</View></View>);
          })
      }
    </ScrollView>
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
});

AppRegistry.registerComponent('ReactNativeComponentDemo', () => ReactNativeComponentDemo);
