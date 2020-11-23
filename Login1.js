import React from 'react';
import { StyleSheet, Platform, Button, Image, Text, View, TochableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// import the different screens
import Login from './Login'
import SignUp from './SignUp'
import { TouchableOpacity } from 'react-native-gesture-handler';
const Stack = createStackNavigator(
  
);


  function Login1Screen({ navigation }) {
    return (
      <View style={{flex: 1, justifyContent: 'center',backgroundColor: '#262b29'}}>
        <Login/> 
       <TouchableOpacity  style={{alignItems: 'center'}} onPress={() => navigation.navigate('SignUp')}>
          <Text style={{ fontSize: 16, marginTop: 15, color: "#008080"}} >Don't have an account? Sign Up</Text>
         
          </TouchableOpacity>
      </View>
    );
  }
  function SignUp1Screen({ navigation }) {
    return (
      <View style={{flex: 1,  justifyContent: 'center',backgroundColor: '#262b29'}}>
        <SignUp/>
        <TouchableOpacity  style={{alignItems: 'center'}} onPress={() => navigation.navigate('Login1')}>
          <Text style={{ fontSize: 16, marginTop: 15, color: "#008080"}} >Already have an account? Login</Text>
         
          </TouchableOpacity>
      </View>
    );
    }
   
    function Login1() {
        return (
          
        <NavigationContainer>
          <Stack.Navigator>
          <Stack.Screen name="Login1" component={Login1Screen}  options={{headerMode: 'none', headerShown : false}} />
            <Stack.Screen name="SignUp" component={SignUp1Screen}  options={{headerMode: 'none', headerShown : false}} />
           </Stack.Navigator>
        </NavigationContainer>
        );
      }
  export default Login1;
 