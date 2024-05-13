//import liraries
import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {View} from 'react-native';
import {Button, TextInput, Subheading} from 'react-native-paper';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const SignUp = () => {
  const navigation = useNavigation();
  const [error, setError] = useState('');
  const [newUser, setNewUser] = useState({
    name: '',
    email: '',
    password: '',
    profession: '',
    country: '',
    photo: '',
    userID: '',
    followingCount: 0,
    followersCount: 0,
    postCount: 0,
  });

  const onChangeText = (key, value) => {
    setNewUser({...newUser, [key]: value});
  };

  const saveUser = (newUse, userId) => {
    firestore()
      .collection('Users')
      .doc(userId)
      .set({...newUse, userID: userId})
      .then(() => {
        console.log('User added!');
      });
  };

  const handleSignUp = () => {
    auth()
      .createUserWithEmailAndPassword(newUser.email, newUser.password)
      .then(() => {
        console.log('User account created & signed in!');
        saveUser(newUser, auth().currentUser.uid);
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
        style={{backgroundColor: '#c8bee2'}}
        label="Name"
        value={newUser.name}
        onChangeText={text => onChangeText('name', text)}
      />
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
      <TextInput
        style={{backgroundColor: '#c8bee2', marginTop: 12}}
        label="Profession"
        value={newUser.profession}
        onChangeText={text => onChangeText('profession', text)}
      />
      <TextInput
        style={{backgroundColor: '#c8bee2', marginTop: 12}}
        label="Country"
        value={newUser.country}
        onChangeText={text => onChangeText('country', text)}
      />
      <TextInput
        label="Photo"
        style={{marginTop: 12, backgroundColor: '#c8bee2'}}
        value={newUser.photo}
        onChangeText={text => onChangeText('photo', text)}
      />

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 16,
        }}>
        <Button
          onPress={() => navigation.navigate('SignInScreen')}
          mode="outlined"
          style={{borderColor: '#6314c9', width: 100}}
          compact>
          Sign In
        </Button>
        <Button
          mode="contained"
          style={{borderColor: '#6314c9'}}
          onPress={() => handleSignUp(newUser)}>
          Sign Up
        </Button>
      </View>
    </View>
  );
};

//make this component available to the app
export default SignUp;
