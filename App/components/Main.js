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
  KeyboardAvoidingView,
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

 deleteM (key) {
    this.state.noteArray.splice(key, 1);
    this.setState({noteArray: this.state.noteArray});

 };

  render() {

    let notes = this.state.noteArray.map((val, key) => {
    return <Note key={key} keyval={key} val={val}
                DeleteM={ ()=>this.deleteM(key) }/>;
    });
    return (
          <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}> -My Notes -</Text>
            </View>

        <ScrollView style={styles.scrollContainer}>
          {notes}
        </ScrollView>
          <KeyboardAvoidingView style={styles.footer}>
              <TextInput style={styles.textInput}
              onChangeText={(noteText) => this.setState({noteText: noteText})}
              value={this.state.noteText}
              placeholder=">note"
              placeholderTextColor="white" />
          </KeyboardAvoidingView>
            <TouchableOpacity onPress={this.addNote.bind(this)} style={styles.addButton}>
              <Text>+</Text>
              </TouchableOpacity>
           </View>
    );
  }

}

const styles = StyleSheet.create({
  SafeAreaView: {
      backgroundColor: 'grey',
      minHeight: 350,
      color: 'white',
    },
    container: {
      flex: 1,
      backgroundColor: '#212121',
  },
  header: {
      backgroundColor: 'black',
      justifyContent: 'center',
      alignItems: 'center',
      borderBottomWidth: 10,
      borderBottomColor: '#ddd',
      // color: 'yellow',
  },
  headerText: {
      color: 'yellow',
      fontSize: 18,
      padding: 26,
  },
  scrollContainer: {
      flex: 1,
      marginBottom: 100,
  },
  footer: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 10,
      backgroundColor: 'black',
      color: 'white',
      borderBottomColor: 'yellow',
      borderBottomWidth: 2,
      borderBottomRightRadius: 10,
      // borderBottom: '1px solid white',
  },
  textInput: {
      alignSelf: 'stretch',
      // color: '#fff',
      padding: 20,
      backgroundColor: '#252525',
      borderTopWidth: 2,
      borderTopColor: '#ededed',
      color: 'white',
      borderBottomColor: 'white',
      borderBottomWidth: 2,
      borderBottomRightRadius: 10,
  },
    addButton: {
        position: 'absolute',
        zIndex: 11,
        right: 20,
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
    footer1: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 10,
      color: 'black',
      top:  50,
      // flex: 1,
      justifyContent: 'flex-end',
    },

});
