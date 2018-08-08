import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import ItemCategory from './ItemCategory/index';
import ItemPreview from './ItemPreview/index';
import _ from 'lodash';

export default class ItemListing extends Component {

  state = {
    itemListing: [], // [{item1},{item2}]
    categories: {}, // {"Armour" : {"Hat": [{hat1},{hat2},...] , "top": [{top1},{top2}, ...]}
    categoryNames: {},// {character: ['Chair', 'Hair', 'Face'],  armour: ['Hat', 'Cape', 'Top']}
    selectedSubcategory: undefined,
    isLoadingItems: false,
    currentPreviewItems: [] // list of ids
  }

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    console.log('Loading items from Maple IO API')
    this.fetchItemListing()
      .then((itemListing) => {

        const categoriesGrouping = _.groupBy(itemListing, item => item.typeInfo.category);
        const categories = // change values of each categoryGrouping from items to their subcategory groupings. Those subcategory groups will hold the items instead.
          _.mapValues(categoriesGrouping, (categoryItems) => {
            const subcategoriesGrouping = _.groupBy(categoryItems, item => item.typeInfo.subCategory)
            return subcategoriesGrouping;
          });
        const categoryNames = _.mapValues(categories, _.keys);

        // Set Up the first section to be displayed
        //
        const firstCategoryName = _.keys(categoryNames)[0] || undefined;
        const firstSubCategoryName = categoryNames[firstCategoryName][0] || undefined;
        const firstPreviewItems = firstCategoryName && firstSubCategoryName ? categories[firstCategoryName][firstSubCategoryName] : [];
    
        this.setState(() => ({
          selectedSubcategory: firstSubCategoryName,
          currentPreviewItems: firstPreviewItems,
          itemListing,
          categories,
          categoryNames
        }));

      })
      .catch((err) => {
        console.error(err);
      })

  }

  handleSubcategorySelected = (selectedSubcategory, category) => {

    console.log("You clicked on: " + selectedSubcategory);
    if (this.state.subcategory === selectedSubcategory) {
      return;
    }

    this.setState(() => {
      console.log("Changing subcategory to: " + selectedSubcategory);
      return {
        currentPreviewItems: this.state.categories[category][selectedSubcategory],
        selectedSubcategory
      }
    });
  }

  fetchItemListing = async () => {

    this.setState(() => ({ isLoadingItems: true }));

    try {
      let itemListingRequest = await fetch(`https://labs.maplestory.io/api/${'gms'}/${'latest'}/item/category/equip`);
      let itemListing = await itemListingRequest.json();
      this.setState(() => ({ isLoadingItems: false }));
      return itemListing;

    } catch (error) {
      this.setState(() => ({ isLoadingItems: false }));
      console.error(error);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles["item-category"]}>
          <ItemCategory
            categoryNames={this.state.categoryNames}
            handleSubcategorySelected={this.handleSubcategorySelected}
            isLoadingItems={this.state.isLoadingItems}
            selectedSubcategory={this.state.selectedSubcategory} />
        </View>

        <View style={styles["item-preview"]}>
          <ItemPreview
            previewItems={this.state.currentPreviewItems}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // borderWidth: 2,
    // borderColor: 'green',
    height: '100%',
    display: 'flex',
    flexDirection: 'row'
  },

  "item-category": {
    borderRightWidth: .4,
    borderColor: '#488AC7',
    flex: 4
  },

  "item-preview": {
    flex: 9,
    borderRightWidth: .3,
    borderColor: '#488AC7',
  }

});
