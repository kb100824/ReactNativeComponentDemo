
'use strict';
import React,{Component} from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
var UIExplorerTitle = require('./UIExplorerTitle');

class UIExplorerPage extends React.Component {
  props: {
    noScroll?: boolean,
    noSpacer?: boolean,
  };

  static propTypes = {
    noScroll: React.PropTypes.bool,
    noSpacer: React.PropTypes.bool,
  };

  render() {
    var ContentWrapper;
    var wrapperProps = {};
    if (this.props.noScroll) {
      ContentWrapper = (View: ReactClass<any>);
    } else {
      ContentWrapper = (ScrollView: ReactClass<any>);
      // $FlowFixMe found when converting React.createClass to ES6
      wrapperProps.automaticallyAdjustContentInsets = !this.props.title;
      wrapperProps.keyboardShouldPersistTaps = 'handled';
      wrapperProps.keyboardDismissMode = 'interactive';
    }
    var title = this.props.title ?
      <UIExplorerTitle title={this.props.title} /> :
      null;
    var spacer = this.props.noSpacer ? null : <View style={styles.spacer} />;
    return (
      <View style={styles.container}>
        {title}
        <ContentWrapper
          style={styles.wrapper}
          {...wrapperProps}>
            {
              // $FlowFixMe found when converting React.createClass to ES6
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
