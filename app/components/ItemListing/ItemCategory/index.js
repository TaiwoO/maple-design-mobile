import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import _ from 'lodash';

const sampleCategories = {
  character: ['Chair', 'Hair', 'Face'],
  armour: ['Hat', 'Cape', 'Top', 'Overall', 'Glove', 'Bottom', 'Shield', 'Shoes'],
  "one-handed weapon": ['Shining Rod', 'Soul Shooter', 'Desperado', 'Whip Blade', 'Scepter', 'Psy - limiter', 'Chain', 'Gauntlet', 'One - Handed Sword', 'One - Handed Axe', 'One - Handed Blunt Weapon', 'Dagger', 'Katara', 'Cane', 'Wand', 'Staff', 'Cash'],
  accessory: ['Eye Decoration', 'Ring', 'Pendant', 'Medal', 'Face Accessory', 'Earrings', 'Belt', 'Shoulder Accessory', 'Pocket Item', 'Badge', 'Emblem',
  ]
}

export default class ItemCategory extends Component {

  render() {
    const categories = _.keys(sampleCategories);

    return (
      <View style={styles.container}>
        {/* TODO: Search */}
        <ScrollView
          bounces={false}
        >
          {
            this.renderCategoriesJsx(categories)
          }
        </ScrollView>
      </View>
    );
  }

  renderCategoriesJsx = (categories) => {
    return categories.map((category, i) => (
      <View key={i}>
        <Text style={styles.category}>{category}</Text>
        {this.renderSubcategoriesJsx(sampleCategories[category], category)}
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

});

