import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {images, fontSize, fontSizes} from '../constants';

const UIButton = props => {
  const {title, isSelected, onPress} = props;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        borderRadius: 20,
        borderColor: 'white',
        borderWidth: 2,
        height: 45,
        marginHorizontal: 40,
        marginVertical: 5,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: isSelected == true ? '#f8f1ff' : null,
      }}>
      {isSelected == true && (
        <Image
          source={images.check}
          style={{
            height: 25,
            width: 25,
            position: 'absolute',
            left: 10,
          }}></Image>
      )}

      <Text
        style={{
          color: isSelected == true ? '#6a12c8' : 'white',
          fontSize: fontSizes.h3,
        }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default UIButton;

const styles = StyleSheet.create({});
