import React, { Component } from 'react';
import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native';
import DraggableCanvas from '../../lib/DraggableCanvas';
import DraggableContainer from '../../lib/DraggableContainer';

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
              return (
                <DraggableContainer key={character.id}>
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

});
