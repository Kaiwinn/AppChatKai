import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect} from 'react';

import UITabs from '../navigation/UITabs';
import {images, fontSizes, colors} from '../constants';
import {UIButton, UILogin} from '../components';
import {
  auth,
  onAuthStateChanged,
  firebaseRef,
  firebaseSet,
  firebaseDatabase,
} from '../firebase/firebase';

const Welcome = props => {
  // state

  const [accountTypes, setAccountTypes] = useState([
    {
      name: 'Influencer',
      isSelected: true,
    },
    {
      name: 'Business',
      isSelected: false,
    },
    {
      name: 'Individual',
      isSelected: false,
    },
  ]);

  const {navigation, route} = props;
  const {navigate, goBack} = navigation;

  useEffect(() => {
    onAuthStateChanged(auth, user => {
      if (user) {
        const userId = user.id;
        debugger;
        //save data to Firebase

        firebaseSet(firebaseRef(firebaseDatabase, `users/${userId}`), {
          email: user.email,
          emailVerified: user.emailVerified,
          accessToken: user.accessToken,
        });
        navigate('UITabs');
      }
    });
  });

  return (
    <ImageBackground
      source={images.background}
      resizeMode="cover"
      style={{width: '100%', height: '100%'}}>
      <View style={{flex: 100}}>
        <View
          style={{
            flex: 10,
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
          }}>
          <Image
            source={images.pen}
            style={{height: 30, width: 30, marginStart: 5}}
          />
          <Text
            style={{
              fontSize: 16,
              fontWeight: 'bold',
              color: 'white',
              marginStart: 10,
            }}>
            KaiWinn.com
          </Text>
          <View style={{flex: 1}}></View>
          <Image
            source={images.help}
            style={{height: 30, width: 30, marginHorizontal: 10}}
          />
        </View>
        <View
          style={{
            flex: 30,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              marginTop: 10,
              marginBottom: 20,
              color: 'white',
              fontSize: 15,
            }}>
            Welcome to
          </Text>
          <Text
            style={{
              marginBottom: 20,
              color: 'white',
              fontWeight: 'bold',
              fontSize: 18,
            }}>
            KAIWINN.CO
          </Text>
          <Text
            style={{
              marginBottom: 20,
              color: 'white',
              fontSize: 13,
            }}>
            Please select your account type
          </Text>
        </View>
        <View style={{flex: 35}}>
          {accountTypes.map(accountType => (
            <UIButton
              key={accountType.name}
              onPress={() => {
                let newAccountType = accountTypes.map(eachAccountType => {
                  return {
                    ...eachAccountType,
                    isSelected: eachAccountType.name == accountType.name,
                  };
                });
                setAccountTypes(newAccountType);
              }}
              title={accountType.name}
              isSelected={accountType.isSelected}
            />
          ))}
        </View>
        <View style={{flex: 25}}>
          <UILogin
            onPress={() => {
              navigate('Login');
            }}
            title={'Login'.toUpperCase()}
          />
          <TouchableOpacity
            onPress={() => {
              navigate('Register');
            }}
            style={{
              alignItems: 'center',
              padding: 10,
            }}>
            <Text
              style={{
                color: 'white',
                fontSize: fontSizes.h5,
              }}>
              Want to Register new account ?
            </Text>
            <Text
              style={{
                color: '#aa67f3',
                fontSize: fontSizes.h6,
                textDecorationLine: 'underline',
              }}>
              Register
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Welcome;

const styles = StyleSheet.create({});
