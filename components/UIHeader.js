import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {fontSizes, images, colors} from '../constants';

import {useSafeAreaInsets} from 'react-native-safe-area-context';

const UIHeader = props => {
  const safeAreaInsets = useSafeAreaInsets();

  const {
    title,
    leftIcon = '',
    rightIcon = '',
    onPressLeftIcon,
    onPressRightIcon,
  } = props;
  return (
    <View style={{flexDirection: 'column'}}>
      <View style={{height: safeAreaInsets.top}} />
      <View
        style={{
          height: 50,
          backgroundColor: '#ae73ee',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: 5,
          flexDirection: 'row',
        }}>
        {leftIcon != undefined ? (
          <TouchableOpacity onPress={onPressLeftIcon}>
            <Image
              style={{
                margin: 5,
                width: 25,
                height: 25,
                tintColor: '#6d26bb',
              }}
              source={leftIcon}></Image>
          </TouchableOpacity>
        ) : (
          <View
            style={{
              width: 25,
              height: 25,
              margin: 5,
            }}></View>
        )}

        <Text
          style={{
            color: 'white',
            fontWeight: 'bold',
            fontSize: fontSizes.h2,
          }}>
          {title}
        </Text>
        {rightIcon != undefined ? (
          <TouchableOpacity onPress={onPressRightIcon}>
            <Image
              style={{
                margin: 5,
                width: 25,
                height: 25,
                tintColor: '#6d26bb',
              }}
              source={rightIcon}></Image>
          </TouchableOpacity>
        ) : (
          <View
            style={{
              margin: 5,
              width: 25,
              height: 25,
            }}></View>
        )}
      </View>
    </View>
  );
};

export default UIHeader;

const styles = StyleSheet.create({});
