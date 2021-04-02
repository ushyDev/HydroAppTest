import React from 'react';
import {Screen, BackgroundImage } from 'components'
import { Main } from 'containers'



const LoginScreen = ({}) => {
   return (
     <Screen>
        <Main />
        <BackgroundImage source={require('assets/images/backgroundImage5.png')} /> 
    </Screen>
    );
}

export default LoginScreen;
