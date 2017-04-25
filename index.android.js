/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import osmdb from './lib/osm-p2p';

export default class Surveyor extends Component {
  constructor() {
    super();

    this.osm = osmdb();

    this.osm.create({
      id: 'A',
      lat: 64.5,
      lon: -147.6
    }, (err, key, node) => console.log(err, key, node));

    this.osm.create({
      id: 'B',
      lat: 64.5,
      lon: -147.6
    }, (err, key, node) => console.log(err, key, node));

    this.osm.create({
      id: 'C',
      lat: 64.5,
      lon: -147.6
    }, (err, key, node) => console.log(err, key, node));
  }

  render() {
    this.osm.query([
      [61, 65],
      [-149, -147]
    ], (err, pts) => console.log(err, pts));

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('Surveyor', () => Surveyor);
