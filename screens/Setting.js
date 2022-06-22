import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Switch,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {fontSizes, images} from '../constants';
import {UIHeader} from '../components';
import {auth, firebaseRef, firebaseSet} from '../firebase/firebase';
import {StackActions} from '@react-navigation/native';

const Setting = props => {
  const [isEnableLockApp, setEnableLockApp] = useState(true);
  const [isUseFingerprint, setUseFingerprint] = useState(true);
  const [isEnableChangePassword, setEnableChangePassword] = useState(true);

  const {navigation, router} = props;
  const {navigate, goBack} = navigation;

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
      }}>
      <UIHeader title={'Setting'} />
      <View style={{height: 115}}>
        <View
          style={{
            height: 35,
            backgroundColor: 'rgba(221,207,235,0.3)',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              paddingStart: 10,
              color: 'black',
              fontSize: fontSizes.h5,
            }}>
            Common
          </Text>
        </View>
        <View
          style={{
            height: 40,
            flexDirection: 'row',
            backgroundColor: 'white',
            alignItems: 'center',
          }}>
          <Image
            style={{
              marginStart: 10,
              width: 20,
              height: 20,
            }}
            source={images.world}></Image>
          <Text
            style={{
              paddingStart: 10,
              color: 'black',
              fontSize: fontSizes.h4,
            }}>
            Language
          </Text>
          <View
            style={{
              flex: 1,
            }}></View>
          <Text
            style={{
              paddingStart: 10,
              color: 'black',
              fontSize: fontSizes.h4,
            }}>
            English
          </Text>
          <Image
            style={{
              marginHorizontal: 15,
              width: 20,
              height: 20,
            }}
            source={images.menulan}></Image>
        </View>
        <View
          style={{
            height: 40,
            flexDirection: 'row',
            backgroundColor: 'white',
            alignItems: 'center',
          }}>
          <Image
            style={{
              marginStart: 10,
              width: 20,
              height: 20,
            }}
            source={images.cloud}></Image>
          <Text
            style={{
              paddingStart: 10,
              color: 'black',
              fontSize: fontSizes.h4,
            }}>
            Environment
          </Text>
          <View
            style={{
              flex: 1,
            }}></View>
          <Text
            style={{
              paddingStart: 10,
              color: 'black',
              fontSize: fontSizes.h4,
            }}>
            Production
          </Text>
          <Image
            style={{
              marginHorizontal: 15,
              width: 20,
              height: 20,
            }}
            source={images.menulan}></Image>
        </View>
      </View>

      <View style={{height: 155}}>
        <View
          style={{
            height: 35,
            backgroundColor: 'rgba(221,207,235,0.3)',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              paddingStart: 10,
              color: 'black',
              fontSize: fontSizes.h5,
            }}>
            Account
          </Text>
        </View>
        <View
          style={{
            height: 40,
            flexDirection: 'row',
            backgroundColor: 'white',
            alignItems: 'center',
          }}>
          <Image
            style={{
              marginStart: 10,
              width: 20,
              height: 20,
            }}
            source={images.phone}></Image>
          <Text
            style={{
              paddingStart: 10,
              color: 'black',
              fontSize: fontSizes.h4,
            }}>
            Phone number
          </Text>
          <View
            style={{
              flex: 1,
            }}></View>

          <Image
            style={{
              marginHorizontal: 15,
              width: 20,
              height: 20,
            }}
            source={images.menulan}></Image>
        </View>
        <View
          style={{
            height: 40,
            flexDirection: 'row',
            backgroundColor: 'white',
            alignItems: 'center',
          }}>
          <Image
            style={{
              marginStart: 10,
              width: 20,
              height: 20,
            }}
            source={images.mail}></Image>
          <Text
            style={{
              paddingStart: 10,
              color: 'black',
              fontSize: fontSizes.h4,
            }}>
            Email
          </Text>
          <View
            style={{
              flex: 1,
            }}></View>

          <Image
            style={{
              marginHorizontal: 15,
              width: 20,
              height: 20,
            }}
            source={images.menulan}></Image>
        </View>
        <TouchableOpacity
          style={{
            height: 40,
            flexDirection: 'row',
            backgroundColor: 'white',
            alignItems: 'center',
            backgroundColor: 'red',
          }}
          onPress={() => {
            auth.signOut();
            navigation.dispatch(StackActions.popToTop);
          }}>
          <Image
            style={{
              marginStart: 10,
              width: 20,
              height: 20,
            }}
            source={images.logout}></Image>
          <Text
            style={{
              paddingStart: 10,
              color: 'black',
              fontSize: fontSizes.h4,
            }}>
            Sign out
          </Text>
          <View
            style={{
              flex: 1,
            }}></View>

          <Image
            style={{
              marginHorizontal: 15,
              width: 20,
              height: 20,
            }}
            source={images.menulan}></Image>
        </TouchableOpacity>
      </View>
      <View style={{height: 75}}>
        <View
          style={{
            height: 35,
            backgroundColor: 'rgba(221,207,235,0.3)',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              paddingStart: 10,
              color: 'black',
              fontSize: fontSizes.h5,
            }}>
            Security
          </Text>
        </View>
        <View
          style={{
            height: 40,
            flexDirection: 'row',
            backgroundColor: 'white',
            alignItems: 'center',
          }}>
          <Image
            style={{
              marginStart: 10,
              width: 20,
              height: 20,
            }}
            source={images.lock}></Image>
          <Text
            style={{
              paddingStart: 10,
              color: 'black',
              fontSize: fontSizes.h4,
            }}>
            Lock app in background
          </Text>
          <View
            style={{
              flex: 1,
            }}></View>

          <Switch
            trackColor={{false: '#767577', true: '#cbb7e1'}}
            thumbColor={isEnableLockApp ? '#9750e4' : '#f4f3f4'}
            onValueChange={() => {
              setEnableLockApp(!isEnableLockApp);
            }}
            value={isEnableLockApp}
          />
        </View>
        <View
          style={{
            height: 40,
            flexDirection: 'row',
            backgroundColor: 'white',
            alignItems: 'center',
          }}>
          <Image
            style={{
              marginStart: 10,
              width: 20,
              height: 20,
            }}
            source={images.finger}></Image>
          <Text
            style={{
              paddingStart: 10,
              color: 'black',
              fontSize: fontSizes.h4,
            }}>
            Use Finger
          </Text>
          <View
            style={{
              flex: 1,
            }}></View>

          <Switch
            trackColor={{false: '#767577', true: '#cbb7e1'}}
            thumbColor={isUseFingerprint ? '#9750e4' : '#f4f3f4'}
            onValueChange={() => {
              setUseFingerprint(!isUseFingerprint);
            }}
            value={isUseFingerprint}
          />
        </View>
      </View>
    </View>
  );
};

export default Setting;

const styles = StyleSheet.create({});
