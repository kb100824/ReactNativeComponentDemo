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
  Image,
} from 'react-native';

// import ActivityIndicatorComponent  from './ComponentDemoJS/indicator';
// import ButtonComponent  from './ComponentDemoJS/button';
// import DatePicker  from './ComponentDemoJS/datepicker';
// import MapViewComponent from './ComponentDemoJS/mapView';
//import KeyboardAvoidingViewComponent from './ComponentDemoJS/keyboardAvoidingView';


//import ListViewExample from './ComponentDemoJS/ListViewExample';
var ListViewExample = require('./ComponentDemoJS/ListViewExample');

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

      <View>
        <ListViewExample/>
      </View>
      //  <ScrollView>
      //  {
      //    MapViewComponent.MapViewModel.map((mapArray)=>{
       //
      //      return <View><Text style={{marginTop:20}}>{mapArray.title}</Text><View>{mapArray.render()}</View></View>
      //    })
      //  }
      //  </ScrollView>


      //日期选择器组件
      //  <ScrollView>
      //  {
      //    DatePicker.DatePickerModel.map((dateArray)=>{
      //      return <View><View style={{backgroundColor:this.state.randomColor,marginTop:20}}><Text style={{fontSize:20,textAlign:'center'}}>{dateArray.title}</Text></View><View>{dateArray.render()}</View></View>
      //    })
      //  }
      //  </ScrollView>



       //按钮组件
    //   <ScrollView>
    //   {
    //     ButtonComponent.ButtonModel.map((buttonArray)=>{
    //       return  (
    //          <View>
    //           <Text style={styles.buttonTitle}>{buttonArray.title}</Text>
    //          <Text style={{fontSize:14}}>{buttonArray.description}</Text>
    //         <View style={{backgroundColor:this.state.randomColor}} >{buttonArray.render()}</View>
    //         </View>);
    //
    //     })
    //   }
    // </ScrollView>


  //  活动指示器
 //   <ScrollView>
 //   {
 //     ActivityIndicatorComponent.indicatorModel.map((indicatorArray)=>{
 //       return  (
 //          <View>
 //           <Text style={{marginTop:20,fontSize:14}}>{indicatorArray.title}</Text>
 //         <View style={{backgroundColor:this.state.randomColor}} >{indicatorArray.render()}</View>
 //         </View>);
 //
 //     })
 //   }
 // </ScrollView>


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
