import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import {ButtonAdd} from 'components'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export function ButtonsAdd(props) {
  return (
    <View style={{flexDirection: 'row', justifyContent: 'space-around', width: windowWidth}}>
      <ButtonAdd source={require('assets/images/milk.png')} onPress={props.onPressBottle} text='bottle' textMl='500ml'/>
      <ButtonAdd source={require('assets/images/coffee.png')}  onPress={props.onPressGlass} text='glass' textMl='250ml'/>
      <ButtonAdd source={require('assets/images/cocktail.png')} onPress={props.onPressCocktail} text='cocktail' textMl='200ml'/>
     </View>
  );
}

