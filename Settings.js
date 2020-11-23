import * as React from 'react';
import { Text, View } from 'react-native';
import {styles} from '../../components/Styles'

export default function Settings() {
  return (
    <View style={{flex: 1,justifyContent: 'center', alignItems: 'center',backgroundColor: '#141816'}}>
        <Text style={{color: 'gray'}}>Settings</Text>
    </View>
  );
}