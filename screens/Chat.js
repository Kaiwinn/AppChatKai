import {StyleSheet, Text, View, Image, FlatList} from 'react-native';
import React, {useState, useEffect} from 'react';
import {UIHeader} from '../components';
import {fontSizes, images, colors} from '../constants';
import ChatItem from './chat/ChatItem';

import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  auth,
  onAuthStateChanged,
  firebaseRef,
  firebaseSet,
  firebaseDatabase,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  child,
  get,
  onValue,
} from '../firebase/firebase';
const Chat = props => {
  const [users, setUsers] = useState([
    // {
    //   url: 'https://static.wikia.nocookie.net/onepiece/images/b/bd/Yamato_Anime_Infobox.png/revision/latest/scale-to-width-down/350?cb=20220119060149',
    //   name: 'Yamato',
    //   message: 'Hello, Are you  OK ?',
    //   numberOfUnreadMessages: 1,
    // },
  ]);

  const {navigation, route} = props;
  const {navigate, goBack} = navigation;

  useEffect(() => {
    onValue(firebaseRef(firebaseDatabase, 'users'), async snapshot => {
      if (snapshot.exists()) {
        //Browser  KEYS
        let snapshotObject = snapshot.val();

        let stringUser = await AsyncStorage.getItem('user');
        let myUserId = JSON.parse(stringUser).userId;

        setUsers(
          Object.keys(snapshotObject)
            .filter(eachKey => eachKey != myUserId)
            .map(eachKey => {
              let eachObject = snapshotObject[eachKey];
              return {
                url: 'https://thumbs.dreamstime.com/b/user-profile-icon-creative-trendy-colorful-round-button-illustration-isolated-156511788.jpg',
                name: eachObject.email,
                email: eachObject.email,
                accessToken: eachObject.accessToken,
                numberOfUnreadMessages: 0,
                userId: eachKey,
              };
            }),
        );
      } else {
        console.log('No data available');
      }
    });
  }, []);

  return (
    <View
      style={{
        flex: 1,
      }}>
      <UIHeader
        title={'Messenger'}
        leftIcon={images.left_menu}
        rightIcon={images.find}
        onPressLeftIcon={() => {
          goBack();
        }}
        onPressRightIcon={() => {
          alert('right');
        }}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 10,
          marginHorizontal: 5,
        }}>
        <Text
          style={{
            color: 'black',
            fontSize: fontSizes.h6,
          }}>
          6 unread messages
        </Text>
        <Image
          style={{
            width: 20,
            height: 20,
          }}
          source={images.delete}></Image>
      </View>
      <FlatList
        style={{
          flex: 1,
        }}
        data={users}
        renderItem={({item}) => (
          <ChatItem
            onPress={() => {
              navigate('Messenger', {user: item});
            }}
            user={item}
            key={item.name}
            keyExtractor={item => item.url}
          />
        )}
      />
    </View>
  );
};

export default Chat;

const styles = StyleSheet.create({});
