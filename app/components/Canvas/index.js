import React, { Component } from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, TouchableWithoutFeedback } from 'react-native';
import DraggableCanvas from '../../lib/DraggableCanvas';
import DraggableContainer from '../../lib/DraggableContainer';
import _ from 'lodash';

export default class Canvas extends Component {


  render() {
    const { characters } = this.props
    return (

      <View style={styles.container}>

        <DraggableCanvas
          bgSrc={require('../../assets/img/graphy.png')}
        >

          {

            characters.map((character) => {
              let borderStyle = {}
              if (_.eq(character, this.props.selectedCharacter)) {
                borderStyle = StyleSheet.flatten(styles["item--selected"])
              }

              return (
                <DraggableContainer
                  key={character.id}
                  style={borderStyle}
                  onPress={() => {
                    this.props.onCharacterClick(character)
                  }}
                >
                  <Image
                    source={{ uri: character.generateImageUrl() }}
                    style={{ width: 65, height: 100, resizeMode: 'contain' }}
                  />
                </DraggableContainer>
              );
            })
          }

        </DraggableCanvas>

      </View>


    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    // borderLeftWidth: 1,
    // borderColor: "yellow",
    height: "100%"
  },

  canvas: {
    // flex: 1
  },

  circle: {
    backgroundColor: "purple",
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
  },

  "item--selected": {
    shadowOpacity: 0.85,
    shadowRadius: 20,
    shadowColor: '#000000',
    shadowOffset: { height: 0, width: 0 },
  }



});
