import React, { Component } from 'react';
import auth from '@react-native-firebase/auth';

import { Loading  } from 'components'


export default class LoadingScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    this.checkIfLoggedIn();
  }

  checkIfLoggedIn = () => {
    auth().onAuthStateChanged(
      function(user) {
        if (user) {
          this.props.navigation.navigate('main')
        } else {
          this.props.navigation.navigate('login');
        }
      }.bind(this)
    );
  };


  render() {
    return (
      <Loading />
    );
  }
}

