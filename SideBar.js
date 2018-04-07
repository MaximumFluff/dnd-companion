import React, { Component } from "react";
import { StyleSheet, Text, AppRegistry } from "react-native";
import { Content, List, ListItem, Left, Icon, Body, Thumbnail } from "native-base";
import DiceRoller from './DiceRoller';
import Home from './Home'
import { DrawerNavigator } from 'react-navigation';
const routes = ["Home", "DiceRoller"];

export default class SideBar extends React.Component {
  render() {
    return (
      <Content style={{ backgroundColor: "#ffffff", paddingTop: 50, fontSize: 20 }}>
      <List
      dataArray={routes}
      contentContainerStyle={{ marginTop: 120 }}
      renderRow={data => {
        return (
          <ListItem
            button
            onPress={() => this.props.navigation.navigate(data)}
            >
            <Left>
            <Thumbnail source={require("./d20icon.png")} style={{height: 30, width: 30}}/>
            </Left>
            <Text>{data}</Text>
          </ListItem>
        );
      }}
/>
      </Content>
    );
  }
}
