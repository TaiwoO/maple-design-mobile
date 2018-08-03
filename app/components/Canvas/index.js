import React, { Component } from 'react';
import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native';

export default class Canvas extends Component {
  render() {
    return (
      <View style={styles.container}>

        <ImageBackground
          source={require('../../assets/img/grid.png')}
          style={{ width: "100%", height: "100%" }}
        >
          <Text>CANVAS</Text>

        </ImageBackground>
      </View>


    );
  }
}


const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: "yellow",
    height: "100%"
  },
});
