import React from 'react';
import { View, Text, StyleSheet, TextInput, Dimensions } from 'react-native';
import {Colors, Typography} from 'styles'


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export function Input(props) {
  return (
    <View style={styles.contener}>
      <Text style={styles.title}>{props.title}</Text>
        <TextInput
        style={styles.input}
        placeholder={props.placeholder}
        onChangeText={props.onChangeText}
        defaultValue={props.defaultValue}
        placeholderTextColor={Colors.theme.text}
        secureTextEntry={props.secureTextEntry}
        autoCorrect={false}
        autoCapitalize='none'
         />
     </View>
  );
}

const styles = StyleSheet.create({
    contener: {
      width: windowWidth * 0.8,
      marginVertical: 8
    },
    input:{
      padding: 10,
      borderWidth: 2,
      borderColor: Colors.theme.input,
      borderRadius: 30,
      backgroundColor: Colors.theme.input,
      padding: 10,
      paddingLeft: 20,
      color: Colors.theme.text,
      fontSize: 16,
      fontFamily: 'Roboto-Regular'
    },
    title:{
      ...Typography.inputTitle,
      marginLeft: 10,
      marginBottom: 3
    }
});