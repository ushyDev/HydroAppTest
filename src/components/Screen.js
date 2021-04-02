import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import {Colors, Typography} from 'styles'
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context'


export function Screen({children}) {
  return (
    <SafeAreaView style={{flex :1}}>
    <View style={styles.contener}>
      {children}
    </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
    contener: {
        flex: 1,
        backgroundColor: Colors.theme.backgroundColor,
        justifyContent: 'center',
        alignItems: 'center',
    }
});