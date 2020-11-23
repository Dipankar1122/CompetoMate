import React, { Component } from 'react';
import { StyleSheet, Platform, Image, Text, View } from 'react-native'
import RNLocation from 'react-native-location'

export default class Location extends React.Component {
  state = { currentUser: null }
  constructor() {
    super();
    this.state = {
      lat: null,
      lon: null,
    }
  }

  componentDidMount() {
    RNLocation.configure({
      distanceFilter: 5.0
    })

  RNLocation.checkPermission({
  ios: 'whenInUse', // or 'always'
  android: {
    detail: 'coarse' // or 'fine'
  }
  })

    RNLocation.requestPermission({
      ios: "whenInUse",
      android: {
        detail: "coarse"
      }
    }).then(granted => {
      if (granted) {
        this.locationSubscription = RNLocation.subscribeToLocationUpdates(locations => {
          console.log('locations: ', locations);
          let lat = locations[0].latitude;
          let lon = locations[0].longitude;
          console.log('locations: ', lat, lon);
          this.setState({ lat: lat, lon: lon });
        })
      }
    })
  }
render() {
    const { currentUser } = this.state
return (
  <View style={styles.container}>
  <Text style={{color: 'gray'}}>latitude: {this.state.lat}</Text> 
  <Text style={{color: 'gray'}}>longitude: {this.state.lon}</Text>
  </View>
        
    )
  }
}
const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  }
})
