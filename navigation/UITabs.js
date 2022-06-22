/**
 *yarn add react-navigation
  yarn add react-native-safe-area-context
  yarn add @react-navigation/bottom-tabs
  yarn add @react-navigation/native
  yarn add @react-navigation/native-stack

  * yarn add react-native-screens
 *
 */
import {StyleSheet, Text, View, Image} from 'react-native';
import * as React from 'react';
import {Setting, Chat} from '../screens';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {fontSizes, images, colors} from '../constants';

const Tab = createBottomTabNavigator();
const UITabs = props => {
  const screenOptions = ({route}) => ({
    headerShown: false,
    tabBarActiveTintColor: colors.pur,
    tabBarInactiveTintColor: '#b6abc3',
    tabBarIcon: ({focused, color, size}) => {
      let screensName = route.name;
      const iconName =
        screensName == 'Mess'
          ? images.chat
          : screensName == 'Setting'
          ? images.settings
          : images.product;
      return (
        <Image
          source={iconName}
          style={{
            height: 20,
            width: 20,
            tintColor: focused ? colors.pur : '#b6abc3',
          }}
        />
      );
    },
  });
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen name={'Chat'} component={Chat} />
      <Tab.Screen name={'Setting'} component={Setting} />
    </Tab.Navigator>
  );
};

export default UITabs;

const styles = StyleSheet.create({});
