import React from 'react';
import { Image, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export function BackgroundImage(props) {
  
  return (

         <Image 
         blurRadius={0} 
         style={{ 
             position: 'absolute',
             height: windowHeight + 20, 
             width: windowWidth,         
             resizeMode: 'cover', 
             opacity: 0.9,
             zIndex: -1,
             flex: 1
         }} 
         source={props.source} 
         /> 
  );
}
