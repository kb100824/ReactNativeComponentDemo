'use strict';
import React,{Component} from 'react';
import {
  Image,
  ListView,
  TouchableHighlight,
  StyleSheet,
  RecyclerViewBackedScrollView,
  Text,
  View,

} from 'react-native';
export default class ListViewExample extends Component {
  constructor(props){
    super(props);
    let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource:ds.cloneWithRows(['第1行', '第2行','第3行','第4行','第5行','第6行','第7行','第8行']),
      randomColor:'#'+('00000'+(Math.random()*0x1000000<<0).toString(16)).slice(-6),//
    };
    
  }
    render(){
      return(
        <ListView dataSource={this.state.dataSource} renderRow={
          (rowData)=><View style={
            [listViewStyle.bgView,{backgroundColor:this.state.randomColor}]
          }><Text style={listViewStyle.text}>
          {rowData}</Text></View>}/>
      );
    }
 }
 var listViewStyle = StyleSheet.create({
    bgView:{
      marginTop:20,
      marginLeft:0,
    },
    text:{
      textAlign:'center',
      fontSize:14,
    },
 });
 module.exports = ListViewExample;
