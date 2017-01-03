'use strict';
import React,{Component} from 'react';
import {
   KeyboardAvoidingView,
   Modal,
   SegmentedControlIOS,
   StyleSheet,
   Text,
   TextInput,
   TouchableHighlight,
   View,
} from 'react-native';
import UIExplorerTitle from './ComponentDemoJS/UIExplorerTitle';
export default class UIExplorerPage extends React.Component {

   props:{
     noScroll?:boolean,
     noSpacer?:boolean,
   };
   static propTypes={
     noScroll:React.PropTypes.bool,
     noSpacer:React.PropTypes.bool,
   };
   render(){

        var ContentWrapper;
         var wrapperProps = {};
         if (this.props.noScroll) {
           ContentWrapper = (View: ReactClass<any>);
         } else {
           ContentWrapper = (ScrollView: ReactClass<any>);
           wrapperProps.automaticallyAdjustContentInsets = !this.props.title;
           wrapperProps.keyboardShouldPersistTaps = 'handled';
           wrapperProps.keyboardDismissMode = 'interactive';
         }
         var title = this.props.title ?
           <UIExplorerTitle title={this.props.title} /> :
           null;
         var spacer = this.props.noSpacer ? null : <View style={styles.spacer} />;
     return(
       <View style={styles.container}>
       {title}
       <ContentWrapper
         style={styles.wrapper}
         {...wrapperProps}>
           {
             this.props.children}
           {spacer}
       </ContentWrapper>
     </View>

     );
   }






}

var styles = StyleSheet.create({
  container: {
    backgroundColor: '#e9eaed',
    flex: 1,
  },
  spacer: {
    height: 270,
  },
  wrapper: {
    flex: 1,
    paddingTop: 10,
  },
});

module.exports = UIExplorerPage;
