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

const Messenger = props => {
  const [chatHistory, setChatHistory] = useState([
    {
      url: 'https://www.dungplus.com/wp-content/uploads/2019/02/Roronoa-zoro-1.jpg',
      isSender: true,
      messenger: 'Hi, KaiWin',
      timestamp: 1654700769000,
      showURL: true,
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTomS7vs8UQyg_3glVxnJYfjMG9JcSkWwFDUUwEd7q34tPe5LmBooxjWNXGgvfA2WRvJoM&usqp=CAU',
      isSender: false,
      messenger: 'Hi !, Zoro',
      timestamp: 1654700829000,
      showURL: true,
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTomS7vs8UQyg_3glVxnJYfjMG9JcSkWwFDUUwEd7q34tPe5LmBooxjWNXGgvfA2WRvJoM&usqp=CAU',
      isSender: false,
      messenger: `I'm Kaiwin`,
      timestamp: 1654700829000,
      showURL: false,
    },
    {
      url: 'https://www.dungplus.com/wp-content/uploads/2019/02/Roronoa-zoro-1.jpg',
      isSender: true,
      messenger: 'Haha, Do you want to ask for directions?',
      timestamp: 1654700869000,
      showURL: true,
    },
  ]);
  const {name, message, url} = props.route.params.user;

  const {navigate, goBack} = props.navigation;
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
      }}>
      <UIHeader
        title={name}
        leftIconName={images.left_menu}
        rightIconName={images.detail}
        style={{}}
        onPressLeftIcon={() => {
          goBack();
        }}
        onPressRightIcon={() => {
          alert('right');
        }}
      />
      <FlatList
        style={{}}
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
    </View>
  );
};

export default Messenger;

const styles = StyleSheet.create({});
