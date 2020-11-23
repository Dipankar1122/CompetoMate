import React from 'react'
import { StyleSheet, Text, TextInput, View, Button } from 'react-native'
import auth from '@react-native-firebase/auth';
import Icon from 'react-native-vector-icons/Ionicons'

export default class SignUp extends React.Component  {
  state = { email: '', password: '', errorMessage: null }
handleSignUp = () => {
  auth()
  .createUserWithEmailAndPassword(this.state.email, this.state.password)
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
  console.log('handleSignUp')
}
render() {
    return (
      <View style={styles.container}>
        <View style={{marginBottom: 60, alignItems: 'center',}}>
        <Icon name="md-home" color="#1e90ff" size={36}/>
        <Text style={{color: '#fff'}}>Home Assist</Text>
        </View>
        <Text style={{color: '#fff'}}>Sign Up</Text>
        {this.state.errorMessage &&
          <Text style={{ color: 'red' }}>
            {this.state.errorMessage}
          </Text>}
        <TextInput style={styles.textInput}
          placeholder="Email"
          placeholderTextColor="gray"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={email => this.setState({ email })}
          value={this.state.email}
        />
        <TextInput style={styles.textInput}
          secureTextEntry
          placeholder="Password"
          placeholderTextColor="gray"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={password => this.setState({ password })}
          value={this.state.password}
        />
        <View style={styles.button}>
        <Button title="Sign Up" onPress={this.handleSignUp} />
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    
    alignItems: 'center'
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