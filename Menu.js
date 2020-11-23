import React from 'react';
import { Button } from 'react-native-elements';
import { View} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerActions } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Profile from './Profile';
import UserME from '../../api/UserMe';
import Settings from './Settings';
import Cart from './Cart';
import MyTabs from '../BottomTab/MyTabs';
import Icon from 'react-native-vector-icons/Ionicons'
import analytics from '@react-native-firebase/analytics';


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

 function Drawer1() {
  return (
    <Drawer.Navigator drawerStyle={{
      backgroundColor: '#262b29',
      overlayColor: "transparent" ,
      color: 'gray'
    }}
    drawerContentOptions={{activeTintColor: '#fff',
    activeBackgroundColor: '#008080',
    inactiveTintColor:'gray'}}>

    <Drawer.Screen name="Home" component={MyTabs} />
    <Drawer.Screen name="Profile" component={Profile} />
    <Drawer.Screen name="Settings" component={Settings} />
  </Drawer.Navigator>
  );
}

export default function Menu() {
  return (
    <NavigationContainer>
   <Stack.Navigator>
      <Stack.Screen name="cM" font-family="" component={Drawer1} 
      options={{
        headerTintColor: '#fff',
      headerStyle:{
        backgroundColor: '#262b29'},
        headerLeft: () => (
          <Button
          icon={ 
            <Icon name="md-menu" color="#008080" size={30} style={{marginLeft: 10}}/>
          }
            onPress={() =>alert('Drawer Butoon!')}
            color= "#0ac0d4"
            type= "clear"
            
          />),
          headerRight: () => (
            <Button 
            icon={ 
              <Icon name="md-user2" color="#008080" size={30} style={{marginRight: 10,}} />
            }
              onPress={() => analytics().logEvent('user2', {
                id: 3745092,
                item: 'it worked!!',
                description: ['name', 'profession/hobbies'],
                size: 'L',
              })
            }
              color= "#0ac0d4"
              type= "clear"
              
            />),   
        }}/>
        <Stack.Screen name="User2" component={User} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}
