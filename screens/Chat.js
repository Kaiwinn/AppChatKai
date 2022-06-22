import {StyleSheet, Text, View, Image, FlatList} from 'react-native';
import React, {useState} from 'react';
import {UIHeader} from '../components';
import {fontSizes, images, colors} from '../constants';
import ChatItem from './chat/ChatItem';

const Chat = props => {
  const [users, setUsers] = useState([
    {
      url: 'https://static.wikia.nocookie.net/onepiece/images/b/bd/Yamato_Anime_Infobox.png/revision/latest/scale-to-width-down/350?cb=20220119060149',
      name: 'Yamato',
      message: 'Hello, Are you  OK ?',
      numberOfUnreadMessages: 1,
    },
    {
      url: 'https://www.dungplus.com/wp-content/uploads/2019/02/Roronoa-zoro-1.jpg',
      name: 'Zoro',
      message: 'Haha, Do you want to ask for directions?',
      numberOfUnreadMessages: 3,
    },
    {
      url: 'https://i.pinimg.com/736x/85/7d/d3/857dd33e70da61770bc2d11625cb8b61.jpg',
      name: 'Crocodile',
      message: 'Do you want sand?',
      numberOfUnreadMessages: 10,
    },
    {
      url: 'https://gamek.mediacdn.vn/133514250583805952/2021/3/17/ao3-1615955590202695354176.jpg',
      name: 'MR.2',
      message: 'We are friends !',
      numberOfUnreadMessages: 5,
    },
    {
      url: 'https://cdn.popsww.com/blog/sites/2/2022/03/shanks-toc-do.jpg',
      name: 'Shank',
      message: 'Im shank',
      numberOfUnreadMessages: 1,
    },
    {
      url: 'https://genk.mediacdn.vn/2018/10/16/2-15396610176111104968472.png',
      name: 'Mihawk',
      message: 'I am a swordsman',
      numberOfUnreadMessages: 0,
    },

    {
      url: 'https://genk.mediacdn.vn/2019/4/22/photo-1-15559284784931257141242.jpg',
      name: 'Rayleigh',
      message: 'I know how to use Haki !',
      numberOfUnreadMessages: 0,
    },
    {
      url: 'https://i.pinimg.com/736x/c7/a5/dd/c7a5ddb4e3f11d808ae3458fd03ce5b1.jpg',
      name: 'Nami',
      message: "I don't like you !",
      numberOfUnreadMessages: 1,
    },
  ]);

  const {navigation, route} = props;
  const {navigate, goBack} = navigation;
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
          alert('left');
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
