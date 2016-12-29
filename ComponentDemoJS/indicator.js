'use strict';

import React, { Component } from 'react';
import {
  ActivityIndicator,
  StyleSheet,
   View ,
} from 'react-native';

type State = { animating: boolean; };
type Timer = number;

class ToggleAnimatingActivityIndicator extends Component {

  state: State;
  timer: Timer;

  constructor(props) {
    super(props);
    this.state = {
      animating: true,
    };
  }

  componentDidMount() {
    this.setToggleTimeout();
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  setToggleTimeout() {
    this.timer = setTimeout(() => {
      this.setState({animating: !this.state.animating});
      this.setToggleTimeout();
    }, 2000);
  }

  render() {
    return (
      <ActivityIndicator
        animating={this.state.animating}
        style={[indicatorStyle.centering, {height: 80}]}
        size="large"
      />
    );
  }
}



//exports.displayName = (undefined: ?string);
//exports.framework = 'React';
//exports.title = '<ActivityIndicator>';
//exports.description = 'Animated loading indicators.';
exports.indicatorModel = [
  {
    title: '指示器默认设置为红色',
    render() {
      return (
        <ActivityIndicator
          style={[indicatorStyle.centering, indicatorStyle.gray]}
          color="red"
        />
      );
    }
  },
  {
    title: '活动指示器灰色',
    render() {
      return (
        <View>
          <ActivityIndicator
            style={[indicatorStyle.centering, {backgroundColor: '#eeeeee'}]}
          />
        </View>
      );
    }
  },
  {
    title: '活动指示器自定义颜色',
    render() {
      return (
        <View style={indicatorStyle.horizontal}>
          <ActivityIndicator color="#0000ff" />
          <ActivityIndicator color="#aa00aa" />
          <ActivityIndicator color="#aa3300" />
          <ActivityIndicator color="#00aa00" />
        </View>
      );
    }
  },
  {
    title: '活动指示器高度为20',
    render() {
      return (
        <ActivityIndicator
          style={[indicatorStyle.centering, indicatorStyle.gray]}
          size="large"
          color="green"
        />
      );
    }
  },
  {
    title: '活动指示器高度为36',
    render() {
      return (
        <View style={indicatorStyle.horizontal}>
          <ActivityIndicator
            size="large"
            color="#0000ff"
          />
          <ActivityIndicator
            size="large"
            color="#aa00aa"
          />
          <ActivityIndicator
            size="large"
            color="#aa3300"
          />
          <ActivityIndicator
            size="large"
            color="#00aa00"
          />
        </View>
      );
    }
  },
  {
    title: '活动指示器显示隐藏交替',
    render() {
      return <ToggleAnimatingActivityIndicator />;
    }
  },
  {
    title: '活动指示器放大1.5',
    render() {
      return (
        <ActivityIndicator
          style={[indicatorStyle.centering, {transform: [{scale: 1.5}]}]}
          size="large"
          color='brown'
        />
      );
    }
  },

];


const indicatorStyle = StyleSheet.create({
  centering: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
  gray: {
    backgroundColor: '#cccccc',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 8,
  },
});
