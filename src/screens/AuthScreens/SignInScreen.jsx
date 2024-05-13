//import liraries
import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {View} from 'react-native';
import {Button, TextInput, Subheading} from 'react-native-paper';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const SignInScreen = () => {
  const navigation = useNavigation();
  const [error, setError] = useState('');
  const [newUser, setNewUser] = useState({
    email: '',
    password: '',
  });

  const onChangeText = (key, value) => {
    setNewUser({...newUser, [key]: value});
  };

  const handleSignIn = () => {
    auth()
      .signInWithEmailAndPassword(newUser.email, newUser.password)
      .then(() => {
        console.log('User account created & signed in!');
      })
      .catch(err => {
        if (err.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
          setError(err.message);
        }

        if (err.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
          setError(err.message);
        }

        console.error(err);
        setError(err.message);
      });
  };

  return (
    <View style={{margin: 16}}>
      {!!error && (
        <Subheading
          style={{color: 'tomato', textAlign: 'center', marginBottom: 16}}>
          {error}
        </Subheading>
      )}

      <TextInput
        label="Email"
        style={{marginTop: 12, backgroundColor: '#c8bee2'}}
        value={newUser.email}
        onChangeText={text => onChangeText('email', text)}
        autoCapitalize="none"
        keyboardType="email-address"
      />
      <TextInput
        secureTextEntry
        label="Password"
        style={{marginTop: 12, backgroundColor: '#c8bee2'}}
        value={newUser.password}
        onChangeText={text => onChangeText('password', text)}
      />

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 16,
        }}>
        <Button
          onPress={() => handleSignIn(newUser)}
          style={{borderColor: '#6314c9', width: 100}}
          mode="contained">
          Sign In
        </Button>
        <Button
          onPress={() => navigation.navigate('SignUpScreen')}
          mode="outlined"
          style={{borderColor: '#6314c9'}}>
          Sign Up
        </Button>
      </View>
    </View>
  );
};

//make this component available to the app
export default SignInScreen;
