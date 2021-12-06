import React from 'react';

import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import {Button, TextInput} from 'react-native-paper';

const LoginScreen = ({navigation}) => {
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
          style={{marginLeft: 18, marginRight: 18, marginTop: 18}}
          theme={{colors: {primary: 'blue'}}}
        />
        <TextInput
          label="Password"
          mode="outlined"
          style={{marginLeft: 18, marginRight: 18, marginTop: 18}}
          theme={{colors: {primary: 'blue'}}}
        />
        <Button
          style={{marginLeft: 18, marginRight: 18, marginTop: 18}}
          mode="contained"
          onPress={() => console.log('Pressed')}>
          Login
        </Button>
        <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
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
