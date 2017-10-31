import React from 'react';
import { Text, View, Platform, TouchableOpacity, StyleSheet, Button, WebView, ScrollView } from 'react-native';
import { Constants, WebBrowser } from "expo";
import { StackNavigator } from 'react-navigation';
import Basics from './Components/Basics';
import Props from './Components/Props';
import State from './Components/State';
import Style from './Components/Style';
import HeightWidth from './Components/HeightWidth';
import FlexBox from './Components/FlexBox';
import TextInput from './Components/TextInput';
import Touches from './Components/Touches';
import ScrollViewComponent from './Components/ScrollView';
import ListViews from './Components/ListViews';
import NetWorking from './Components/NetWorking';
import WhatToDo from './Components/WhatToDo';

const Touchable = (props) => (
  <TouchableOpacity style={styles.button} onPress={props.onPress}>
    <Text style={styles.buttonText}>{props.title}</Text>
  </TouchableOpacity>)

class HomeScreen extends React.Component {
  static navigationOptions = { title: 'Day1 Tutorial' };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView>
      <View >
        <Text style={{ textAlign: "center", fontSize: 20 }}>See all Demos implemented by Cph-hl151</Text>
        <Touchable onPress={() => navigate('web')} title="What I have to do" />
        <Touchable onPress={() => navigate('basics')} title="Basics" />
        <Touchable onPress={() => navigate('props')} title="Props" />
        <Touchable onPress={() => navigate('state')} title="State" />
        <Touchable onPress={() => navigate('style')} title="Styles" />
        <Touchable onPress={() => navigate('flexdimensionsbasics')} title="FlexDimensionsBasics" />
        <Touchable onPress={() => navigate('alignitemsbasics')} title="AlignItemsBasics" />
        <Touchable onPress={() => navigate('pizzatranslator')} title="PizzaTranslator" />
        <Touchable onPress={() => navigate('touchables')} title="Touchables" />
        <Touchable onPress={() => navigate('scrollview')} title="ScrollView" />
        <Touchable onPress={() => navigate('sectionlistbasics')} title="SectionListBasics" />
        <Touchable onPress={() => navigate('movies')} title="Movies" />
      </View>
      </ScrollView>
      
    )
  }
}

export default App = () => <RouteStack style={{ marginTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight / 2 }} />

const RouteStack = StackNavigator({
  Home: { screen: HomeScreen },
  basics: { screen: Basics },
  props: { screen: Props },
  state: { screen: State },
  style: { screen: Style },
  flexdimensionsbasics: { screen: HeightWidth },
  alignitemsbasics: { screen: FlexBox },
  pizzatranslator: { screen: TextInput },
  touchables: { screen: Touches },
  scrollview: { screen: ScrollViewComponent },
  sectionlistbasics: { screen: ListViews },
  movies: { screen: NetWorking },
  web: { screen: WhatToDo },
});

const styles = StyleSheet.create({
  button: {
    margin: 3,
    alignItems: 'center',
    backgroundColor: '#2196F3'
  },
  buttonText: {
    padding: 7,
    fontSize: 18,
    fontWeight: "bold",
    color: 'white'
  }
})