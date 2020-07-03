import React from 'react';
import Main from './App/components/Main';
import {StyleSheet} from 'react-native';

export default class App extends React.Component {
  render() {
    return <Main style={styles.main} />;
  }
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: 'grey',
  },
});
