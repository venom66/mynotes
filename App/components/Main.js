/* eslint-disable prettier/prettier */
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Note from './Note';

export default class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      noteArray: [],
      noteText: '',
    };
  }

  addNote () {
    if (this.state.noteText) {
       var d = new Date();
        this.state.noteArray.push({
         'date':d.getFullYear() +
         '/' + (d.getMonth() + 1 ) +
         '/' + d.getDate(),
         'note': this.state.noteText,
       });

      this.setState({ noteArray: this.state.noteArray});
      this.setState({ noteText: ''});
    }
 }

  render() {

    let notes = this.state.noteArray.map((val, key) => {
    return <Note key={key} keyval={key} val={val}
                deleteM={ ()=>this.deleteM(key) }/>;
    });
    return (
    <SafeAreaView style={styles.SafeAreaView}>
        <View style={styles.container}>
          <View style={styles.header}>
              <Text style={styles.text}> -My Notes -</Text>
          </View>
        </View>

      <ScrollView style={styles.scrollContainer}>
        {notes}
      </ScrollView>

        <View style={styles.footer}>
            <TextInput style={styles.TextInput}
            onChangeText={(noteText) => this.setState({noteText: noteText})}
            value={this.state.noteText}
            placeholder=">note"
            placeholderTextColor="black" />
        </View>
          <TouchableOpacity onPress={this.addNote.bind(this)} style={styles.addButton}>
            <Text>+</Text>
            </TouchableOpacity>
    </SafeAreaView>
    );
  }

}

const styles = StyleSheet.create({
    SafeAreaView: {
      backgroundColor: 'grey',
      height: '100%',
      color: 'white',
    },
    container: {
        justifyContent: 'center',
        textAlign: 'center',
        backgroundColor: '#625B5A',
        // flex: 1,
    },
    header: {
        justifyContent: 'center',
    },
    text: {
        justifyContent: 'center',
        textAlign: 'center',
        color: 'yellow',
    },
    scrollContainer: {
        flex: 1,
        marginBottom: 100,
    },
    TextInput: {
        alignSelf: 'stretch',
        color: 'black',
        padding: 20,
        borderTopWidth: 2,
        backgroundColor: 'pink',

    },
    addButton: {
        position: 'relative',
        zIndex: 11,
        right: -300,
        bottom: 90,
        backgroundColor: '#E91E63',
        width: 90,
        height: 90,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 8,
    },
    addButtonText: {
      color: '#fff',
      fontSize: 24,
    },
    footer: {
      position: 'relative',
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 10,
      color: 'black',
      top:  50,
      flex: 2,
      justifyContent: 'flex-end',
    },
});
