import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {create} from 'react-test-renderer';
import ProfileScreen from '../HomeScreens/ProfileScreen';
import SettingsScreen from '../HomeScreens/SettingsScreen';

function Profile({uid}) {
  const ProfileStack = createNativeStackNavigator();

  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen options={{headerShown: false}} name="ProfileScreen">
        {() => <ProfileScreen uid={uid} />}
      </ProfileStack.Screen>

      <ProfileStack.Screen name="SettingsScreen" component={SettingsScreen} />
    </ProfileStack.Navigator>
  );
}

export default Profile;
