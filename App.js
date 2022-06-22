import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Welcome, Login, Setting, Register} from './screens';
import MyApp from './navigation/MyApp';
const App = () => {
  return (
    <View style={{flex: 1}}>
      <MyApp />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
