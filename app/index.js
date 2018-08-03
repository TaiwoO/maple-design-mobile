import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import ItemListing from './components/ItemListing/index';
import Canvas from './components/Canvas/index';
import CharacterList from './components/CharacterList/index';

export default class MapleDesign extends Component {
  render() {
    return (

      <View style={styles["widget"]}>
        <StatusBar hidden={true} />
        <View style={styles["widget-top"]}>
          <View style={styles["widget-top__item-listing"]}>
            <ItemListing />
          </View>
          <View style={styles["widget-top__canvas"]}>
            <Canvas />
          </View>
        </View>

        <View style={styles["widget-bottom"]}>
          <View style={styles["widget-bottom__character-list"]}>
            <CharacterList />
          </View>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  widget: {
    display: "flex",
    flexDirection: 'column',
    height: "100%",
  },

  "widget-top": {
    flex: 8,
    display: "flex",
    flexDirection: 'row'
  },
  "widget-top__item-listing": {
    flex: 6
  },
  "widget-top__canvas": {
    flex: 5
  },

  "widget-bottom": {
    flex: 2
    // display: "flex"
  },
  "widget-bottom__character-list": {
    // flex: 1
  },
});