import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity 
} from 'react-native';

export default class Form extends Component<{}> {

	render(){
		return(
			<View style={{flex:1,alignItems: 'center'}}>
          <TextInput   
              placeholder={this.props.type}
              placeholderTextColor = {this.props.paint}
              selectionColor= "gray"
              keyboardType={this.props.type1}
              />
  		</View>
			)
	}
}

const styles = StyleSheet.create({
  inputBox: {
    width:300,
    height: 45,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: "gray",
    fontSize: 12,
    color: "gray",

  }
  
});