import {StyleSheet, Text, View} from 'react-native';
import React, {useContext, useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {DataContext} from '../context/context';
import BottomNavigator from './BottomNavigator';
import AuthNavigator from './AuthNavigator';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const RootNavigator = () => {
  const {avaibleUser, setAvaibleUSer, setUserInfo} = useContext(DataContext);

  const getUser = async userId => {
    const user = await firestore().collection('Users').doc(userId).get();
    setUserInfo(user._data);
  };

  function onAuthStateChanged(user) {
    if (user) {
      getUser(auth().currentUser.uid);

      setAvaibleUSer(true);
    } else {
      setAvaibleUSer(false);
    }
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  const RootStack = createNativeStackNavigator();
  return (
    <RootStack.Navigator>
      {avaibleUser && (
        <RootStack.Screen
          name="BottomNavigator"
          component={BottomNavigator}
          options={{headerShown: false}}
        />
      )}
      {!avaibleUser && (
        <RootStack.Screen
          name="AuthNavigator"
          component={AuthNavigator}
          options={{headerShown: false}}
        />
      )}
    </RootStack.Navigator>
  );
};

export default RootNavigator;

const styles = StyleSheet.create({});
