import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, Dimensions, Image } from 'react-native';
import _ from 'lodash';

export default class ItemPreview extends Component {

  state = {
    dimensions: undefined
  }

  constructor(props) {
    super(props);

    this.flatListRef = React.createRef();
  }

  componentDidMount() {

  }

  componentDidUpdate(prevProps, prevState) {
    // TODO: Create a cache of previously previewed items?

    if (_.isEqual(prevProps.previewItems, this.props.previewItems)) {
      console.log("Dont change\n")
      return;
    }

    this.flatListRef.current.scrollToOffset({ offset: 0, animated: true });
    console.log("Change\n")
    this.requestNewPreviewItems();
  }

  requestNewPreviewItems = () => {
    console.log("requesting new preview items.....\n")
  }

  onLayout = (e) => { // Layout changes

    let { x, y, width, height } = e.nativeEvent.layout;
    this.setState(() => (
      {
        dimensions: { width, height, x, y }
      }
    ));
  }

  render() {
    const { previewItems } = this.props;
    const previewItemWidth = 40;
    const previewItemHeight = 42;

    return (
      <View style={styles.container} onLayout={this.onLayout}>

        { // only render the content if the dimension information is valid. 
          this.state.dimensions &&
          (
            <FlatList
              contentContainerStyle={styles["preview-items-container"]}
              numColumns={Math.floor(this.state.dimensions.width / previewItemWidth)}
              data={previewItems}
              renderItem={({ item, index }) => (
                <View style={{ width: previewItemWidth, height: previewItemHeight , flex: 1}}>
                  <View style={styles["preview-item-image-container"]}>
                    <Image
                      source={{ uri: `https://labs.maplestory.io/api/${'gms'}/${'latest'}/item/${item.id}/icon` }}
                      style={{ width: '100%', height: '100%', resizeMode: 'contain' }}
                    />
                  </View>
                  {/* <Text style={styles["preview_item__text"]}> {index}</Text> */}
                </View>
              )}
              keyExtractor={item => item.id.toString()}
              ref={this.flatListRef}
            />
          )
        }

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // borderWidth: 2,
    // borderColor: 'red',
    height: '100%',

  },

  "preview-items-container": {

  },

  "preview-item-image-container": {
    // borderWidth: 1,
    padding: 6
  },

  "preview_item__text": {
    color: "blue"
  }
});