import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Keyboard,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {images, fontSizes, colors, icons} from '../../constants/index';

const ChatItem = props => {
  let {url, name, message, numberOfUnreadMessages, userId} = props.user;
  const {onPress} = props;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        height: 88,
        paddingTop: 2,
        paddingHorizontal: 5,
        flexDirection: 'row',
      }}>
      <View>
        <Image
          style={{
            marginStart: 5,
            width: 60,
            height: 60,
            resizeMode: 'cover',
            borderRadius: 35,
          }}
          source={{
            uri: url,
          }}></Image>

        {numberOfUnreadMessages > 0 && (
          <Text
            style={{
              paddingVertical: numberOfUnreadMessages > 9 ? 5 : 4,
              paddingHorizontal: numberOfUnreadMessages > 9 ? 6 : 7,
              fontWeight: 'bold',
              fontSize: 9,
              backgroundColor: 'red',
              position: 'absolute',
              right: -10,
              top: numberOfUnreadMessages > 9 ? -1 : 0,
              borderRadius: 30,
              color: 'white',
            }}>
            {numberOfUnreadMessages}
          </Text>
        )}
      </View>
      <View
        style={{
          marginStart: 20,
          marginTop: 3,
          flex: 2,
        }}>
        <View style={{height: 30, justifyContent: 'center'}}>
          <Text
            style={{
              color: colors.pur,
              fontWeight: 'bold',
              fontSize: fontSizes.h3,
            }}>
            {name}
          </Text>
        </View>

        <Text
          style={{
            color: colors.inactive,
            fontSize: fontSizes.h6,
            fontWeight: numberOfUnreadMessages > 0 ? 'bold' : 'normal',
          }}>
          {message}
        </Text>
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'flex-end',
          flex: 1,
        }}>
        <Text
          style={{
            color: colors.inactive,
            fontSize: fontSizes.h6,
            marginEnd: 20,
            marginBottom: 15,
          }}>
          4 minutes ago
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ChatItem;

const styles = StyleSheet.create({});
