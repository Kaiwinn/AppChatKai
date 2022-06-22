import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {images, icons, colors, fontSizes} from '../constants/index';

const LoginButton = props => {
  const {onPress, title, isSelected} = props;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        borderColor: '#f0c4ff',
        borderWidth: 2,
        borderRadius: 20,
        height: 45,
        marginHorizontal: 43,
        marginVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: null,
      }}>
      <Text
        style={{
          color: 'white',
          fontSize: 21,
        }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default LoginButton;

const styles = StyleSheet.create({});
