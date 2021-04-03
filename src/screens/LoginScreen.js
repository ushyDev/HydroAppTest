import React from 'react';
import {SafeAreaView} from 'react-native'
import {Screen, BackgroundImage } from 'components'
import { Login } from 'containers'


const LoginScreen = ({}) => {
   return (
    <Screen> 
        <Login />
        <BackgroundImage source={require('assets/images/backgroundImage2.png')} /> 
    </Screen>
    );
}

export default LoginScreen;
