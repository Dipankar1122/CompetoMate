import React, { useState, useEffect } from 'react';
import {ActivityIndicator,StyleSheet, Platform, Image, Text, View } from 'react-native'
import Location from '../components/Location'
import Menu from './Menu/Menu'
import MyTabs from './BottomTab/MyTabs'


export default function Main() {
  const [loading, setLoading] = useState(true);

return (
<>
 <Menu/>
  
 </>   
    )
    if (loading) {
      return <ActivityIndicator />;
    }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center'
  }
})
