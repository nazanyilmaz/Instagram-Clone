import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SearchScreen from './SearchScreen';
import ProfileScreen from './ProfileScreen';

const SearchStack = () => {
  const SearchStack = createNativeStackNavigator();
  return (
    <SearchStack.Navigator>
      <SearchStack.Screen
        name={'SearchScreen'}
        component={SearchScreen}
        options={{headerShown: false}}
      />
      <SearchStack.Screen
        name={'ProfileScreen'}
        component={ProfileScreen}
        options={{headerShown: false}}
      />
    </SearchStack.Navigator>
  );
};

export default SearchStack;

const styles = StyleSheet.create({});
