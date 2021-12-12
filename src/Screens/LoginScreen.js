import React, {useState} from 'react';

import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  KeyboardAvoidingView,
  Alert,
} from 'react-native';
import {Button, TextInput} from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const sendCredentials = () => {
    fetch('http://192.168.0.111:3000/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then(res => res.json())
      .then(async data => {
        try {
          await AsyncStorage.setItem('token', data.token);
          navigation.replace('Home');
        } catch (e) {
          console.log('An Error Occured: ', e);
          Alert.alert('Error', e.message);
        }
      });
  };

  return (
    <>
      <KeyboardAvoidingView behavior="position">
        <StatusBar backgroundColor="blue" barStyle="light-content" />
        <Text
          style={{
            fontSize: 35,
            marginLeft: 18,
            marginTop: 10,
            color: '#3b3b3b',
          }}>
          Welcome to
        </Text>
        <Text style={{fontSize: 30, marginLeft: 18, color: 'blue'}}>
          Auth Test App
        </Text>
        <View
          style={{
            borderBottomColor: 'blue',
            borderBottomWidth: 4,
            borderRadius: 10,
            marginLeft: 20,
            marginRight: 170,
            marginTop: 5,
          }}
        />
        <Text
          style={{
            fontSize: 20,
            marginLeft: 18,
            marginTop: 20,
          }}>
          Login with Email
        </Text>
        <TextInput
          label="Email"
          mode="outlined"
          value={email}
          style={{marginLeft: 18, marginRight: 18, marginTop: 18}}
          theme={{colors: {primary: 'blue'}}}
          onChangeText={text => setEmail(text)}
        />
        <TextInput
          label="Password"
          mode="outlined"
          secureTextEntry={true}
          value={password}
          style={{marginLeft: 18, marginRight: 18, marginTop: 18}}
          theme={{colors: {primary: 'blue'}}}
          onChangeText={text => setPassword(text)}
        />
        <Button
          style={{marginLeft: 18, marginRight: 18, marginTop: 18}}
          mode="contained"
          onPress={() => sendCredentials()}>
          Login
        </Button>
        <TouchableOpacity onPress={() => navigation.replace('Signup')}>
          <Text
            style={{
              fontSize: 18,
              marginLeft: 18,
              marginTop: 20,
            }}>
            Don't have an account?
          </Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </>
  );
};

export default LoginScreen;
