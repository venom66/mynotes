import React from 'react';
import Main from './App/components/Main';
import {StyleSheet, View} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default class App extends React.Component {
  render() {
    return <Main style={styles.main} />
  }
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: 'grey',
  },
});
