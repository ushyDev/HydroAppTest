import React from 'react';
import {Dimensions, View} from 'react-native'
import {Colors, Typography} from 'styles'
import * as Progress from 'react-native-progress'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const widthProgress = 140
const heightProgress = (windowHeight * 0.55) 

export function ProgressBar(props) {
  return (
    <View style={{height: heightProgress, justifyContent: 'center'}}>
    <Progress.Bar
     style={{
       borderRadius: 35, 
       transform: [{ rotate: '-90deg'}]}} 

     progress={props.progress} 
     width={heightProgress} 
     height={widthProgress}
     color={Colors.basic.primary}
     unfilledColor={Colors.basic.background}
     borderWidth={8}
     borderColor={Colors.basic.secondary}
//'#b6a9ef'
     />
     </View>
  );
}
