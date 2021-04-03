import React, { Component } from 'react';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth'

import { View, StyleSheet } from 'react-native';
import {ProgressBar, Title, BigTitle, AddText } from 'components'
import {ButtonsAdd} from 'containers'

export class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
        userData: [],
        mililiters: 0
    };
  }

  userDataRef = firestore().collection('users').doc(auth().currentUser.uid).collection('water')

  componentDidMount(){
    
    const today = new Date()
    today.setHours(0,0,0,0) 
    this.userDataRef.where("createdAt", "==", today.toString())
        .onSnapshot(
            querySnapshot => {
                const newEntities = []
                querySnapshot.forEach(docs => {
                    const entity = docs.data()
                    entity.id = docs.id
                    newEntities.push(entity)
                });

                if(newEntities[0] == undefined){
                  null
                }else{
                  this.setState({userData: newEntities})
                  const sum = this.sumMilliliters(newEntities)
                  this.setState({mililiters: sum})
                }
            },
            error => {
                console.log(error)
            }
        )
  }

    sumMilliliters = (data) => {
      function mililiters(item){
        return item.milliliters
      }
      function sum(prev, next) {
        return prev + next;
      }
      return data.map(mililiters).reduce(sum)
    }


    addWater = (type) => {
      const today = new Date()
      today.setHours(0,0,0,0) 

      this.userDataRef
          .doc(this.userDataRef.doc().id)
          .set({
              createdAt: today.toString(),
              milliliters: type
          })
          .then(function(snapshot) {
          });
    }


    progress = () => {
      const toGoal = this.state.mililiters/2000
        return toGoal;
    }


  render() {
    return (
      <View style={styles.contener}>
        <Title text='GOAL 2000ml'/>
        <BigTitle text={(this.progress() * 100).toFixed(0) + '%'} />
        <ProgressBar 
        progress={this.progress()}
        />
        <AddText />
        <ButtonsAdd 
        onPressGlass={() => this.addWater(250)} 
        onPressBottle={() => this.addWater(500)} 
        onPressCocktail={() => this.addWater(200)} 
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    contener: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
});