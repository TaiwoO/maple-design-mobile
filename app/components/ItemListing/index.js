import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class ItemListing extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Item Listing</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: "green",
    height: "100%"
  },
});