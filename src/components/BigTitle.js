import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {Colors, Typography} from 'styles'


export function BigTitle(props) {
  return (
      <Text style={styles.title}>{props.text}</Text>
  );
}

const styles = StyleSheet.create({
    title:{
        ...Typography.titleBigTheme,
        alignSelf: 'center',
        marginTop: 0
    }
});
