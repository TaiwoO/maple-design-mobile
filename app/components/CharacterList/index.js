import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class CharacterList extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>CharacterList</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: "orange",
    height: "100%"
  },
});