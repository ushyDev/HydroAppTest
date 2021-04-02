import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import {Typography} from 'styles'

const windowWidth = Dimensions.get('window').width;

export function AddText() {
  return (
    <View style={{width: windowWidth, justifyContent: 'center', alignItems: 'center', flexDirection: 'row'}}>
    <View style={{height: 1, width: windowWidth / 3 , borderWidth: 0.5, borderColor: '#000000'}}></View>
      <Text style={{margin: 8, ...Typography.addButtonMl}}>Add</Text>
      <View style={{height: 1, width: windowWidth / 3 , borderWidth: 0.5, borderColor: '#000000'}}></View>
     </View>
  );
}
