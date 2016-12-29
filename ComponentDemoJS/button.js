'use strict';
import React,{Component} from 'react';
import {
  Alert,
  Button,
  View,
} from 'react-native';

const onButtonPress = ()=>{
  Alert.alert("你已经点击按钮");
};
exports.displayName="ButtonExample";
exports.framework="React";
exports.title="<Button>";
exports.description="Simple React Native button component";
exports.ButtonModel=[
  {
     title:'按钮默认设置',
     description: '按钮标题以及按钮事件',
     render(){
       return(<Button onPress={onButtonPress} title="点击" accessibilityLabel="该属性用于给残障人士显示的文本"/>);
     }
  },
  {
    title: '自定义按钮标题颜色',
      description: '自定义按钮标题文字颜色',
      render: function() {
        return (
          <Button
            onPress={onButtonPress}
            title="Press Purple"
            color="#841584"
            accessibilityLabel="Learn more about purple"
          />
        );
      },
  },
  {
      title: '设置按钮的位置布局',
      description: '自定义按钮位置',
      render(){
        return(
         <View style={{flexDirection:'row',justifyContent:'space-between'}}>
         <Button onPress={onButtonPress} title="按钮靠左边"
         accessibilityLabel="按钮靠左边不太美观"/>
         <Button
            onPress={onButtonPress}
            title="按钮靠右边"
            color="#841584"
            accessibilityLabel="按钮靠右边也不太美观"
          />
         </View>
        );
      }
  },
  {
    title: '禁用状态按钮',
    description: '按钮已经被禁用',
    render: function() {
      return (
        <Button
          disabled={true}
          onPress={onButtonPress}
          title="禁用"
          accessibilityLabel="被禁用无法显示弹框"
        />
      );
    },
  },


];
