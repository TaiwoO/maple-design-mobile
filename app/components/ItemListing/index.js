import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import ItemCategory from './ItemCategory/index';
import ItemPreview from './ItemPreview/index';

export default class ItemListing extends Component {

  state = {
    items: [], // [{item1},{item2}]
    categories: {}, // {"Armour" : {"Hat": [{hat1},{hat2},...] , "top": [{top1},{top2}, ...]}
    categoryNames: {},// {character: ['Chair', 'Hair', 'Face'],  armour: ['Hat', 'Cape', 'Top']}
    selectedSubcategory: null,
    currentPreviewItems: [] // list of ids
  }

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    console.log('Loading items from Maple IO API')
  }

  handleSubcategorySelected = (subcategory, category) => {

    console.log("You clicked on: " + subcategory);
    if (this.state.subcategory === subcategory) {
      return;
    }

    this.setState(() => {
      console.log("Changing subcategory to: " + subcategory);
      return {
        currentPreviewItems: this.getItemForSubcategory(subcategory, category),
        subcategory
      }
    });
  }

  getItemForSubcategory = (subcategory, category) => {
    // return categories[category][subcategory]
    console.log("Gettings items for : " + subcategory + " in " + category)
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles["item-category"]}>
          <ItemCategory
            handleSubcategorySelected={this.handleSubcategorySelected} />
        </View>

        <View style={styles["item-preview"]}>
          <ItemPreview
            previewItems={this.state.previewItems}
          />
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
