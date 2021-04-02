import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {Colors, Typography} from 'styles'


export function Title(props) {
  return (
      <Text style={styles.title}>{props.text}</Text>
  );
}

const styles = StyleSheet.create({
    title:{
        ...Typography.titleTheme,
        alignSelf: 'center',
        marginTop: 0
    }
});
