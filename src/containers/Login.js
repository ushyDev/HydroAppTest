import React, { Component } from 'react';
import auth from '@react-native-firebase/auth'


import { View, StyleSheet, Dimensions, Text} from 'react-native';
import { Logo, Input, Button, Title } from 'components'
import {PushNotification} from 'services'

const windowHeight = Dimensions.get('window').height;

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
        textEmail: '',
        textPassword: ''
    };
  }

  componentDidMount() {
    PushNotification.ScheduledLocalNotification()
  }

  SignInWithEmail = () => {
      console.log('eMAIL', this.state.textEmail)
      console.log('password', this.state.textPassword)

    auth()
    .signInWithEmailAndPassword(this.state.textEmail, this.state.textPassword)
    .then(() => {
      console.log('User account created & signed in!');
    })
    .catch(error => {
      if (error.code === 'auth/email-already-in-use') {
        console.log('That email address is already in use!');
      }
  
      if (error.code === 'auth/invalid-email') {
        console.log('That email address is invalid!');
      }
  
      console.error(error);
    });
  }


  render() {
    return (
      <View style={styles.contener}>

        <View>
          <Logo />
          <Title text='Sign in'/>
        </View>

        <View style={styles.smallContener}>
            <View style={{marginBottom: 30}}>
                <Input 
                placeholder='youremail@gmail.com'
                defaultValue={this.state.textEmail}
                onChangeText={(text) => this.setState({textEmail: text})}
                secureTextEntry={false}
                title='E-Mail'
                />
                <Input 
                placeholder='yourpassword'
                defaultValue={this.state.textPassword}
                onChangeText={(text) => this.setState({textPassword: text})}
                secureTextEntry={true}
                title='Password'
                />
            </View>

            <Button text='Login' onPress={() => this.SignInWithEmail()}/>

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    contener: {
        justifyContent: 'space-around',
        flex: 1,
        alignItems: 'center'
    },
    smallContener: {
        height: windowHeight * 0.30,
        justifyContent: 'space-between',
    }
});