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
import {images, fontSizes, colors, icons} from '../constants/index';
import {isValidEmail, isValidPassword} from '../utilities/Validation';

const Login = props => {
  const [keyboardIsShown, setKeyboardIsShown] = useState(false);

  // states for validating
  const [errorEmail, setErrorEmail] = useState('');
  const [errorPassword, setErrorPassword] = useState('');

  // states to store email/ password
  const [email, setEmail] = useState('kaikai@gmail.com');
  const [password, setPassword] = useState('123456');

  const isValidationOK = () =>
    email.length > 0 &&
    password.length > 0 &&
    isValidEmail(email) == true &&
    isValidPassword(password) == true;

  useEffect(() => {
    //componentDidmount

    Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardIsShown(true);
    });
    Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardIsShown(false);
    });
  });

  // navigation
  const {navigation, route} = props;
  // function of navigate to/back
  const {navigate, goBack} = navigation;
  return (
    <View style={styles.view_parent}>
      <View style={styles.view1}>
        <Text style={styles.text1}>Already have an Account?</Text>
        <Image source={images.cake} style={styles.logo}></Image>
      </View>
      <View style={styles.view2}>
        <View style={styles.viewholder1}>
          <Text style={styles.text2}>Email</Text>
          <TextInput
            onChangeText={text => {
              setErrorEmail(
                isValidEmail(text) == true ? '' : 'Email not in correct format',
              );
              setEmail(text);
            }}
            value={email}
            placeholder="Kaiwin@gmail.com"
            placeholderTextColor={'#8a8787'}
            style={styles.input}
          />
          <View style={styles.linec}></View>
          <Text style={styles.text7}>{errorEmail}</Text>
        </View>
        <View style={styles.viewholder2}>
          <Text style={styles.text3}>Password</Text>
          <TextInput
            onChangeText={text => {
              setErrorPassword(
                isValidPassword(text) == true
                  ? ''
                  : 'Password must be at least 3 characters',
              );
              setPassword(text);
            }}
            value={password}
            placeholder="Enter your password"
            placeholderTextColor={'#8a8787'}
            style={styles.input}
            secureTextEntry={true}
          />
          <View style={styles.linec}></View>
          <Text style={styles.text7}>{errorPassword}</Text>
        </View>
      </View>
      <View style={styles.view3}>
        {keyboardIsShown == false && (
          <TouchableOpacity
            disabled={isValidationOK() == false}
            style={{
              marginTop: 20,
              alignItems: 'center',
              justifyContent: 'center',
              marginHorizontal: 53,
              borderRadius: 23,
              padding: 10,
              backgroundColor:
                isValidationOK() == true ? colors.touch : colors.inactive,
            }}
            onPress={() => {
              navigate('UITabs');
            }}>
            <Text style={styles.text4}>Login</Text>
          </TouchableOpacity>
        )}
        {keyboardIsShown == false && (
          <TouchableOpacity
            style={styles.touch2}
            onPress={() => {
              navigate('Register');
            }}>
            <Text style={styles.text5}>New user? Register now</Text>
          </TouchableOpacity>
        )}
      </View>
      <View style={styles.view4}>
        {keyboardIsShown == false && (
          <View
            style={{
              marginTop: 5,
              alignItems: 'center',
              flexDirection: 'row',
              height: 40,
              flex: 1,
            }}>
            <View style={styles.line}></View>
            <View>
              <Text style={styles.text6}>Sign in with another method</Text>
            </View>
            <View style={styles.line}></View>
          </View>
        )}
        <View style={styles.signorther}>
          <Image source={images.facebook} style={styles.icon}></Image>
          <Image source={images.google} style={styles.icon}></Image>
          <Image source={images.instagram} style={styles.icon}></Image>
        </View>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  view_parent: {
    backgroundColor: '#f7f3ff',
    flex: 100,
  },
  view1: {
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 30,
    flex: 30,
  },
  view2: {
    flex: 30,
  },
  view3: {
    flex: 15,
  },
  view4: {
    flex: 20,
    flexDirection: 'column',
  },
  text1: {
    marginTop: 10,
    marginLeft: 20,
    marginRight: 15,
    width: '40%',
    color: 'black',
    fontWeight: 'bold',
    fontSize: fontSizes.h2,
  },
  text2: {
    marginTop: 10,
    color: colors.pur,
    fontSize: fontSizes.h4,
  },
  text3: {
    marginTop: 5,
    color: colors.pur,
    fontSize: fontSizes.h4,
  },
  text4: {
    color: 'white',
    fontSize: fontSizes.h3,
  },
  text5: {
    color: '#186ae6',
    fontSize: fontSizes.h6,
    fontWeight: 'bold',
  },
  text6: {
    color: 'black',
    fontSize: fontSizes.h6,
  },
  text7: {
    color: 'red',
    fontSize: fontSizes.h6,
    marginBottom: 15,
  },
  logo: {
    marginTop: 15,
    marginLeft: 5,
    width: 175,
    height: 175,
  },
  viewholder1: {
    marginHorizontal: 20,
    marginTop: 15,
  },
  viewholder2: {
    marginHorizontal: 20,
  },

  touch2: {
    padding: 8,
    alignItems: 'center',
  },
  input: {color: colors.dark, fontSize: fontSizes.h4},
  line: {
    backgroundColor: 'black',
    height: 1,
    marginHorizontal: 20,
    flex: 1,
  },
  linec: {
    backgroundColor: colors.pur,
    height: 1,
    width: '100%',
  },
  signorther: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 35,
  },
  icon: {
    marginHorizontal: 5,
    width: 55,
    height: 55,
  },
});
