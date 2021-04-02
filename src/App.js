import React, {useEffect} from 'react';
import MainNavigator from './navigation/navigator'
import {SafeAreaProvider} from 'react-native-safe-area-context'
import SplashScreen from 'react-native-splash-screen'


function App() {
    
    useEffect(() => {
        SplashScreen.hide();
      }, []);
    

    return(
        <SafeAreaProvider>
        <MainNavigator />
        </SafeAreaProvider>
    )
}

export default App;