import React, { useState, useEffect } from 'react';
import { ActivityIndicator, StatusBar,StyleSheet, View, Text } from 'react-native';
import auth from '@react-native-firebase/auth';
import Login1 from './Login1';
import Main from './Main';
import Menu from './Menu/Menu';
import analytics from '@react-native-firebase/analytics';


function Loading() {   

  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  
  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) {
    return <ActivityIndicator size="large" color="#008080"
    style={{flex:1, justifyContent: 'center',alignItems: 'center'}} />;}  
  if (!user) {
    return (
      <>
      <StatusBar backgroundColor= '#141816'/>
    <Login1/>
    </>
    );
  }

  return (
    <>
    <StatusBar backgroundColor= '#141816'/>
    <Main/>
    </>
  );
  

  }

export default Loading;