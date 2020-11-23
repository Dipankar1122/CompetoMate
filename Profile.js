import React, { useState, useEffect } from 'react';
import { Button } from 'react-native-elements';
import { Text, View } from 'react-native';
import auth from '@react-native-firebase/auth';
import UserMe from '../../api/UserMe';

export default class Profile extends React.Component {
  
  handleSignOut = () =>{
    auth()
  .signOut()
  .then(() => console.log('User signed out!'));
  }
  render (){
  return (
    <View style={{flex: 1,justifyContent: 'center', alignItems: 'center',backgroundColor: '#141816'}}>
        <Text  style={{color: 'gray'}}>Profile</Text>
        <UserMe/>
        <Button title="SignOut"  onPress={this.handleSignOut} type='clear'/>
    </View>
  );
}
}
