import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {images, fontSizes, colors, icons} from '../../constants/index';
const MessengerItem = props => {
  const {onPress} = props;
  const {url, isSender, messenger, timestamp, showURL} = props.item;
  return isSender == true ? (
    <TouchableOpacity
      onPress={onPress}
      style={{
        marginTop: 15,
      }}>
      <View style={{flexDirection: 'row'}}>
        {showURL == true ? (
          <Image
            style={{
              marginTop: 3,
              marginStart: 5,
              width: 40,
              height: 40,
              resizeMode: 'cover',
              borderRadius: 35,
            }}
            source={{
              uri: url,
            }}></Image>
        ) : (
          <View
            style={{
              marginTop: 3,
              marginStart: 5,
              width: 40,
              height: 40,
              borderRadius: 35,
            }}></View>
        )}
        <View style={{flexDirection: 'column', width: 230}}>
          <Text
            style={{
              marginStart: 10,
              color: 'black',
              fontSize: fontSizes.h4,
              paddingStart: 15,
              paddingVertical: 10,
              paddingEnd: 10,
              backgroundColor: '#e6d3e0',
              borderRadius: 10,
            }}>
            {messenger}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  ) : (
    <TouchableOpacity
      onPress={onPress}
      style={{
        marginTop: 15,
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-end',
          marginEnd: 10,
        }}>
        <View style={{flexDirection: 'column', width: 230}}>
          <Text
            style={{
              marginStart: 10,
              color: 'black',
              fontSize: fontSizes.h4,
              paddingStart: 15,
              paddingVertical: 10,
              paddingEnd: 10,
              backgroundColor: '#cedceb',
              borderRadius: 10,
            }}>
            {messenger}
          </Text>
        </View>
        {showURL === true ? (
          <Image
            style={{
              marginTop: 3,
              marginStart: 5,
              width: 40,
              height: 40,
              resizeMode: 'cover',
              borderRadius: 35,
            }}
            source={{
              uri: url,
            }}></Image>
        ) : (
          <View
            style={{
              marginTop: 3,
              marginStart: 5,
              width: 40,
              height: 40,
              borderRadius: 35,
            }}></View>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default MessengerItem;

const styles = StyleSheet.create({});
