import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

import {Typography} from 'styles'

export function ButtonAdd(props) {
  return (
    <View>
    <TouchableOpacity style={{bottom: 5}} onPress={props.onPress}>
        <Image style={{width: 60, height: 50, resizeMode: 'contain', }} source={props.source} />
    </TouchableOpacity>
    <Text style={{...Typography.addButtonTitle}}>{props.text}</Text>
    <Text style={{...Typography.addButtonMl}}>{props.textMl}</Text>

    </View>
  );
}
