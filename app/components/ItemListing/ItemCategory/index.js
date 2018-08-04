import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native';
import _ from 'lodash';

const sampleCategoriesNames = {
  character: ['Chair', 'Hair', 'Face'],
  armour: ['Hat', 'Cape', 'Top', 'Overall', 'Glove', 'Bottom', 'Shield', 'Shoes'],
  "one-handed weapon": ['Shining Rod', 'Soul Shooter', 'Desperado', 'Whip Blade', 'Scepter', 'Psy - limiter', 'Chain', 'Gauntlet', 'One - Handed Sword', 'One - Handed Axe', 'One - Handed Blunt Weapon', 'Dagger', 'Katara', 'Cane', 'Wand', 'Staff', 'Cash'],
  accessory: ['Eye Decoration', 'Ring', 'Pendant', 'Medal', 'Face Accessory', 'Earrings', 'Belt', 'Shoulder Accessory', 'Pocket Item', 'Badge', 'Emblem',
  ]
}

export default class ItemCategory extends Component {


  render() {
    const { categoryNames } = this.props
    // const categories = _.keys(categoriesNames);

    return (
      <View style={styles.container}>
        <ActivityIndicator style={styles["loading-spinner"]} animating={this.props.isLoadingItems} size="small" color="#2196F3" />
        {/* TODO: Search */}
        <ScrollView
          bounces={false}
        >


          {
            this.renderCategoriesJsx(categoryNames)
          }
        </ScrollView>
      </View>
    );
  }

  renderCategoriesJsx = (categoryNames) => {

    const categories = _.keys(categoryNames);

    return categories.map((category, i) => (
      <View key={i}>
        <Text style={styles.category}>{category}</Text>
        {this.renderSubcategoriesJsx(categoryNames[category], category)}
      </View>
    ));
  }

  renderSubcategoriesJsx = (subcategories, category) => {
    return subcategories.map((subcategory, i) => (
      <View key={i} style={styles["subcategory-wrapper"]}  >
        <TouchableOpacity
          style={styles.subcategory}
          onPress={() => {
            this.props.handleSubcategorySelected(subcategory, category)
          }}
        >
          <Text>{subcategory}</Text>
        </TouchableOpacity>
      </View>
    ));
  }

}

const styles = StyleSheet.create({
  container: {
    // borderWidth: 2,
    // borderColor: 'purple',
    height: '100%'
  },

  "category": {
    backgroundColor: '#488AC7',
    color: 'white',
    padding: 8
  },

  "subcategory-wrapper": {
    borderColor: '#CCCCCC',
    borderBottomWidth: 1,
  },

  "subcategory": {
    padding: 10,
  },

  "loading-spinner": {
    position: 'absolute',
    marginTop: '50%',
    left: 0,
    right: 0,
    // margin: 'auto'
  }

});

