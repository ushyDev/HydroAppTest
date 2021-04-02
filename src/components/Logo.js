import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export function Logo() {
  return (
    <View>
      <Image 
      style={{
        width: windowWidth * 0.3, 
        height: 200,
        resizeMode: 'contain', 
        opacity: 1
         }} 
         source={require('assets/images/drop.png')} /> 
     </View>
  );
}
