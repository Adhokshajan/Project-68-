import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import insta from "./screens/insta"
import fb from './screens/fb'
import{createAppContainer} from 'react-navigation'
import{createBottomTabNavigator} from 'react-navigation-tabs'
export default class App extends React.Component{
  render(){
    return(
      <AppContainer/>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const TabNavigator = createBottomTabNavigator({
  Facebook:{screens:fb},
  Instagram:{screens:insta},
})
const AppContainer = createAppContainer(TabNavigator)


















