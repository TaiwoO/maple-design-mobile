import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TouchableWithoutFeedback, TouchableHighlight } from 'react-native';
import _ from 'lodash';

export default class CharacterList extends Component {

  render() {
    const { characters } = this.props

    return (
      <View style={styles.container}>
        <ScrollView
          horizontal={true}
        >

          {

            characters.map((character) => {
              let borderStyle = {}
              if (_.eq(character, this.props.selectedCharacter)) {
                borderStyle = StyleSheet.flatten(styles["list-item--selected"])
              }

              return (
                <View
                  key={character.id}
                  style={[styles["list-item"], borderStyle]}
                >
                  <TouchableWithoutFeedback
                    onPress={() => {
                      this.props.onCharacterClick(character)
                    }}
                  >
                    <Image
                      source={{ uri: character.generateImageUrl() }}
                      style={{ width: 65, height: 65, resizeMode: 'contain' }}
                    />
                  </TouchableWithoutFeedback>
                </View>
              );
            })
          }

          
          <View style={styles["list-item"]}>
            <TouchableHighlight
              onPress={this.props.onAddCharacter}
            >
            <Text style={{ fontSize: 50 }}>+</Text>
            </TouchableHighlight>

          </View>

        </ScrollView>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderTopWidth: .4,
    borderColor: "#488AC7",
    height: "100%"
  },

  "list-item": {
    // flex: 1,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },

  "list-item--selected": {

    borderWidth: 1,
    // borderRadius: 2,
    borderColor: '#ddd',
    // borderBottomWidth: 0,
    shadowColor: 'rgb(72, 138, 199)',
    shadowOffset: { width: 2, height: 1 },
    shadowOpacity: 1.0,
    shadowRadius: 2,


  }


});