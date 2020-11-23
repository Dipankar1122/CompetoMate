import React from 'react'
import { StyleSheet, Text, TextInput, View, Button } from 'react-native'
import auth from '@react-native-firebase/auth';
import App from '../../App.js';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons'

export default class Login extends React.Component {
  state = { email: '', password: '', errorMessage: null }
  

  handleLogin = () => {
    auth()
    .signInWithEmailAndPassword(this.state.email, this.state.password)
    .then(() => {
      console.log('User account signed in!');
    })
    .catch(error => {
      if (error.code === 'auth/invalid-email') {
        return(
        console.log('That email address is invalid!'));

        return(
          console.log('please Re-Enter!')
        );
      }
      
      console.error(error);
    });
    console.log('handleLogin')
  }
  render() {
    return (
      <View style={styles.container}>
        
        <View style={{marginBottom: 60, alignItems: 'center',}}>
        <Icon name="md-home" color="#1e90ff" size={36}/>
        <Text style={{color: '#fff'}}>Home Assist</Text>
        </View>
        <Text style={{color: '#fff'}}>Login</Text>
        {this.state.errorMessage &&
          <Text style={{ color: 'red' }}>
            {this.state.errorMessage}
          </Text>}
        <TextInput
          style={styles.textInput}
          autoCapitalize="none"
          placeholder="Email"
          placeholderTextColor="gray"
          onChangeText={email => this.setState({ email })}
          value={this.state.email}
        />
        <TextInput
          style={styles.textInput}
          secureTextEntry
          autoCapitalize="none"
          placeholder="Password"
          placeholderTextColor="gray"
          onChangeText={password => this.setState({ password })}
          value={this.state.password}
        />
        <View style={styles.button}>
        <Button title="Login" onPress={this.handleLogin} />
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
  
    alignItems: 'center',
   
  },
  textInput: {
    color: 'gray',
    height: 40,
    width: '95%',
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 16,
    borderRadius: 16
  },
  button:
  {
    marginTop: 25,
    width: 80,
    fontWeight: "bold"
  }
})