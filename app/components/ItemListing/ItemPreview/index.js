import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class ItemPreview extends Component {

  state = {
    previewItems: this.props.previewItems
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log(prevProps.previewItems);

    // if (isInCache(prevProps.previewItems)) {
        // load imgs from cache instead
    // }

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