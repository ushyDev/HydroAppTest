import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import {Colors, Typography} from 'styles'

const windowWidth = Dimensions.get('window').width;

export function Button(props) {
  return (
    <TouchableOpacity
    onPress={props.onPress}
    style={styles.contener}
    >
        <Text style={styles.text}>{props.text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    contener:{
        width: windowWidth *0.4,
        backgroundColor: Colors.theme.backgroundColor,
        alignSelf: 'center',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 14
    },
    text:{
        ...Typography.buttonTitle
    }
});