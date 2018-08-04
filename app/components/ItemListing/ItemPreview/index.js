import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class ItemPreview extends Component {

  componentDidUpdate(prevProps, prevState) {
    this.requestNewPreviewItems();
  }

  requestNewPreviewItems = () => {
    console.log("requesting new preview items.....")
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Item Preview</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: 'red',
    height: '100%'
  }
});