import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Welcome, Login, Register} from '../screens/index';
import Messenger from '../screens/Messenger/Messenger';
import UITabs from '../navigation/UITabs';
const Stack = createNativeStackNavigator();
const MyApp = props => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Welcome"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name={'Welcome'} component={Welcome} />
        <Stack.Screen name={'Login'} component={Login} />
        <Stack.Screen name={'UITabs'} component={UITabs} />
        <Stack.Screen name={'Messenger'} component={Messenger} />
        <Stack.Screen name={'Register'} component={Register} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyApp;

const styles = StyleSheet.create({});
