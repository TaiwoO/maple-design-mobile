import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapleDesign from './app/index'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <MapleDesign />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {

  },
});
