import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProfileScreen from './ProfileScreen';
import SettingsScreen from './SettingsScreen';

const Profile = ({uid}) => {
  const ProfileStack = createNativeStackNavigator();
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen name="ProfileScreen" options={{headerShown: false}}>
        {() => <ProfileScreen uid={uid} />}
      </ProfileStack.Screen>
      <ProfileStack.Screen
        name="SettingsScreen"
        component={SettingsScreen}
        //options={{headerShown: false}}
      />
    </ProfileStack.Navigator>
  );
};

export default Profile;

const styles = StyleSheet.create({});
