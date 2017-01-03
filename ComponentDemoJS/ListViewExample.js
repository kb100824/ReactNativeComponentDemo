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
 TouchableOpacity,

} from 'react-native';

//官方简单例子
// export default class ListViewExample extends Component {
//   constructor(props){
//     super(props);
//     let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
//     this.state = {
//       dataSource:ds.cloneWithRows(['第1行', '第2行','第3行','第4行','第5行','第6行','第7行','第8行']),
//       randomColor:'#'+('00000'+(Math.random()*0x1000000<<0).toString(16)).slice(-6),//
//     };
//
//   }
//     render(){
//       return(
//         <ListView dataSource={this.state.dataSource} renderRow={
//           (rowData)=><View style={
//             [listViewStyle.bgView,{backgroundColor:this.state.randomColor}]
//           }><Text style={listViewStyle.text}>
//           {rowData}</Text></View>}/>
//       );
//     }
//  }


 var THUMB_URLS = [
   require('./images/like.png'),
  require('./images/dislike.png'),
  require('./images/call.png'),
  require('./images/fist.png'),
  require('./images/bandaged.png'),
  require('./images/flowers.png'),
  require('./images/heart.png'),
  require('./images/liking.png'),
  require('./images/party.png'),
  require('./images/poke.png'),
  require('./images/superlike.png'),
  require('./images/victory.png'),
   ];

  //列表每一行显示一个图片以及文
  // var ListViewDemo = React.createClass({
  //   getInitialState: function() {
  //   var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
  //     return {
  //       dataSource: ds.cloneWithRows(['row1', 'row 2','row 3','row 4','row 5','row 6','row 7','row 8','row 9','row10','row 11','row 12']),
  //     };
  // },
  //
  // render: function() {
  //   return (
  //     <ListView
  //       dataSource={this.state.dataSource}
  //       renderRow={(rowData,sectionID,rowID)=>{
  //         return (
  //         <TouchableOpacity>
  //           <View>
  //                <View style={listViewStyle.row}>
  //                 <Image style={listViewStyle.thumb} source={THUMB_URLS[rowID]} />
  //                <Text style={listViewStyle.text}>
  //                 {'我是'+rowData+'行'}
  //                </Text>
  //             </View>
  //           </View>
  //         </TouchableOpacity>);
  //       }}
  //     />
  //   );
  // }
  // });

  var SpaceListViewDemo =  React.createClass({

      getInitialState:function(){
        var ds = new ListView.DataSource({rowHasChanged:(r1,r2)=>r1!==r2});
        return {
          dataSource:ds.cloneWithRows(this._genRows({})),
        };
      },
      _pressData:({}:{[key:number]:boolean}),
      componentWillMount:function(){
        this._pressData = {};
      },
      render(){
        return(
          <ListView
       initialListSize={12}
       contentContainerStyle={listViewStyle.space_list}
       dataSource={this.state.dataSource}
       renderRow={this._renderRow}
     />
        );
      },
      _renderRow: function(rowData: string,sectionID: number, rowID: number) {
    var imgSource = THUMB_URLS[rowID];
    return (
      <TouchableHighlight underlayColor="red">
        <View>
          <View style={listViewStyle.space_row}>
            <Image style={listViewStyle.thumb} source={imgSource} />
            <Text style={listViewStyle.space_text}>
              {rowData}
            </Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  },
  _genRows: function(pressData: {[key: number]:boolean}): Array<string> {
      var dataBlob = [];
      for (var i = 0; i < THUMB_URLS.length;i++) {
        dataBlob.push('单元格 ' + i);
      }
      return dataBlob;
    },

  });



 var listViewStyle = StyleSheet.create({
    bgView:{
      marginTop:20,
      marginLeft:0,
    },
    text:{
      textAlign:'center',
      fontSize:14,
      marginTop:10,
    },
    row: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: '#F6F6F6',
  },
  space_list: {
    marginTop:5,
    justifyContent: 'space-around',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  space_row:{
    justifyContent: 'center',
    padding: 5,
    margin: 3,
    width: 85,
    height: 85,
    backgroundColor: '#F6F6F6',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#CCC'
  },
  space_text: {
    flex: 1,
    marginTop: 5,
    fontWeight: 'bold'
  },
  thumb: {
    width: 50,
    height: 50,
  },
 });
//module.exports = ListViewExample;
//module.exports = ListViewDemo;
module.exports = SpaceListViewDemo;
