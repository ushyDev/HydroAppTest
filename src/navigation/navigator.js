import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import LoadingScreen from '../screens/LoadingScreen';
import LoginScreen from '../screens/LoginScreen';
import MainScreen from '../screens/MainScreen';

const MainNavigator = createSwitchNavigator({
    loading: LoadingScreen,
    login: LoginScreen,
    main: MainScreen
    },{
        mode: 'card',
        animationEnabled: true, 
        initialRouteName: 'loading' ,
        defaultNavigationOptions: {
            header: null, 
                     
    }})
    
    

    export default createAppContainer(MainNavigator)

