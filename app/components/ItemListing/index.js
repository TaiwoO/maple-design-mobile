import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ItemCategory from './ItemCategory/index';
import ItemPreview from './ItemPreview/index';

export default class ItemListing extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles["item-category"]}>
          <ItemCategory />
        </View>

        <View style={styles["item-preview"]}>
          <ItemPreview />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    // borderColor: 'green',
    height: '100%',
    display: 'flex',
    flexDirection: 'row'
  },

  "item-category": {
    flex: 4
  },

  "item-preview": {
    flex: 9
  }

});