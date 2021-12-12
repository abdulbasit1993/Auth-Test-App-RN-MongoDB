import React, {useEffect, useState} from 'react';

import {Text} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Button} from 'react-native-paper';

const HomeScreen = props => {
  const [email, setEmail] = useState('loading');

  const Boiler = async () => {
    const token = await AsyncStorage.getItem('token');
    fetch('http://192.168.0.111:3000/', {
      headers: new Headers({
        Authorization: 'Bearer ' + token,
      }),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setEmail(data.email);
      });
  };

  useEffect(() => {
    Boiler();
  }, []);

  const logout = props => {
    AsyncStorage.removeItem('token').then(() => {
      props.navigation.replace('Login');
    });
  };

  return (
    <>
      <Text style={{fontSize: 18}}>Your email is {email}</Text>
      <Button
        style={{marginLeft: 18, marginRight: 18, marginTop: 18}}
        mode="contained"
        onPress={() => logout(props)}>
        Log Out
      </Button>
    </>
  );
};

export default HomeScreen;
