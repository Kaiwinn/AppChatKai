import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Keyboard,
  FlatList,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {images, fontSizes, colors, icons} from '../../constants/index';
import {UIHeader} from '../../components';
import MessengerItem from './MessengerItem';

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
} from '../../firebase/firebase';

import AsyncStorage from '@react-native-async-storage/async-storage';

const Messenger = props => {
  const [typedText, setTypedText] = useState('');

  const [chatHistory, setChatHistory] = useState([
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTomS7vs8UQyg_3glVxnJYfjMG9JcSkWwFDUUwEd7q34tPe5LmBooxjWNXGgvfA2WRvJoM&usqp=CAU',
      isSender: false,
      messenger: 'Hi !, Zoro',
      timestamp: 1654700829000,
      showURL: true,
    },
    {
      url: 'https://www.dungplus.com/wp-content/uploads/2019/02/Roronoa-zoro-1.jpg',
      isSender: true,
      messenger: 'Hi, KaiWin',
      timestamp: 1654700769000,
      showURL: true,
    },
  ]);
  const {name, message, url, userId} = props.route.params.user;

  const {navigate, goBack} = props.navigation;

  useEffect(() => {
    onValue(firebaseRef(firebaseDatabase, 'chats'), async snapshot => {
      if (snapshot.exists()) {
        //Browser  KEYS
        let snapshotObject = snapshot.val();

        let stringUser = await AsyncStorage.getItem('user');
        let myUserId = JSON.parse(stringUser).userId;

        let updatedChatHistory = Object.keys(snapshotObject)
          .filter(item => item.includes(myUserId))
          .map(eachKey => {
            return {
              ...snapshotObject[eachKey],
              isSender: eachKey.split('-')[0] == myUserId,
              url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTomS7vs8UQyg_3glVxnJYfjMG9JcSkWwFDUUwEd7q34tPe5LmBooxjWNXGgvfA2WRvJoM&usqp=CAU',
            };
          })
          .sort((item1, item2) => item1.timestamp - item2.timestamp);

        for (let i = 0; i < updatedChatHistory.length; i++) {
          let item = updatedChatHistory[i];

          item.showURL =
            i == 0 ? true : item.isSender != updatedChatHistory[i].isSender;
        }
        setChatHistory(updatedChatHistory);
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
        title={name}
        leftIcon={images.left_menu}
        rightIcon={images.detail}
        style={{}}
        onPressLeftIcon={() => {
          goBack();
        }}
        onPressRightIcon={() => {
          alert('right');
        }}
      />
      <FlatList
        style={{flex: 1}}
        data={chatHistory}
        renderItem={({item}) => (
          <MessengerItem
            onPress={() => {
              alert(`Mess Item ${item.messenger}`);
            }}
            item={item}
            key={`${item.timestamp}`}
          />
        )}
      />
      <View
        style={{
          height: 56,
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <TextInput
          onChangeText={typedText => {
            setTypedText(typedText);
          }}
          style={{
            fontSize: fontSizes.h4,
            color: 'black',
            paddingStart: 15,
          }}
          placeholder="Enter your message"
          value={typedText}
          placeholderTextColor={'#b8a1d0'}></TextInput>
        <TouchableOpacity
          style={{
            paddingHorizontal: 10,
          }}
          onPress={async () => {
            if (typedText.trim().length == 0) {
              return;
            } else {
              debugger;
              let stringUser = await AsyncStorage.getItem('user');
              let myUserId = JSON.parse(stringUser).userId;
              let friendUserId = props.route.params.user.userId;

              let newMessengerObject = {
                url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTomS7vs8UQyg_3glVxnJYfjMG9JcSkWwFDUUwEd7q34tPe5LmBooxjWNXGgvfA2WRvJoM&usqp=CAU',
                showURL: true,
                messenger: typedText,
                timestamp: new Date().getTime(),
              };
              Keyboard.dismiss();
              firebaseSet(
                firebaseRef(
                  firebaseDatabase,
                  `chats/${myUserId} - ${friendUserId}`,
                ),
                newMessengerObject,
              ).then(() => {
                setTypedText('');
              });

              //"id1-id2": {messenger Object}
            }
          }}>
          <Image
            style={{
              height: 30,
              width: 30,
            }}
            source={images.sent}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Messenger;

const styles = StyleSheet.create({});
