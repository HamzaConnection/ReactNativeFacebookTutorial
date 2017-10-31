import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';

export default class FlexDimensionsBasics extends Component {
  render() {
    return (
      
      <View>
        <View style={{height: 100, backgroundColor: 'powderblue'}} />
        <View style={{height: 100, backgroundColor: 'skyblue'}} />
        <View style={{height: 100, backgroundColor: 'steelblue'}} />
      </View>
    );
  }
}

