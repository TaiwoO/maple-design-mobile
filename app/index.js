import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import ItemListing from './components/ItemListing/index';
import Canvas from './components/Canvas/index';
import CharacterList from './components/CharacterList/index';
import { Character } from './models/Character';

export default class MapleDesign extends Component {

  constructor(props) {
    super(props);
    // console.log(char1)

    let defaultChar = new Character();
    let testChar = new Character();
    this.state = {
      characters: [defaultChar, testChar],
      selectedCharacter: defaultChar
    }
  }

  handleItemClick = (item) => {
    console.log(`Item: ${item} was clicked`)
    // console.log(item);

    let selectedCharacter = this.state.selectedCharacter;
    selectedCharacter.addItem(item);
    this.setState(() => ({
      selectedCharacter
    }))
  }

  handleChangeSelectedCharacter = (character) => {
    this.setState(() => ({
      selectedCharacter: character
    }))
  }

  render() {
    return (

      <View style={styles["widget"]}>
        <StatusBar hidden={true} />
        <View style={styles["widget-top"]}>

          <View style={styles["widget-top__item-listing"]}>
            <ItemListing
              onItemClick={this.handleItemClick}
            />
          </View>

          <View style={styles["widget-top__canvas"]}>
            <Canvas
            onCharacterClick = {this.handleChangeSelectedCharacter}
            characters={this.state.characters} 
            selectedCharacter = {this.state.selectedCharacter}
            />
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

