import {StyleSheet, Text, View} from 'react-native';
import React, {useContext} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Profile from '../screens/HomeScreens/Profile';
import AddPost from '../screens/HomeScreens/AddPost';
import MyPosts from '../screens/HomeScreens/MyPosts';
import MIcon from '../components/MIcon';
import {colors} from '../utils/Colors';
import {DataContext} from '../context/context';
import SearchScreen from '../screens/HomeScreens/SearchScreen';
import SearchStack from '../screens/HomeScreens/SearchStack';

const BottomNavigator = () => {
  const BottomStack = createBottomTabNavigator();
  const {userInfo} = useContext(DataContext);
  return (
    <BottomStack.Navigator>
      <BottomStack.Screen
        name="MyPost"
        component={MyPosts}
        options={{
          headerShown: false,

          tabBarIcon: ({color, size}) => (
            <MIcon name="home" color={colors.ROSEY} size={32} />
          ),
          tabBarActiveTintColor: colors.ROSEY,
          tabBarInactiveTintColor: colors.lightTextColor,
          tabBarShowLabel: false,
        }}
      />

      <BottomStack.Screen
        name="SearchScreen"
        component={SearchStack}
        options={{
          headerShown: false,

          tabBarIcon: ({color, size}) => (
            <MIcon name="search" color={colors.ROSEY} size={32} />
          ),
          tabBarActiveTintColor: colors.ROSEY,
          tabBarInactiveTintColor: colors.lightTextColor,
          tabBarShowLabel: false,
        }}
      />

      <BottomStack.Screen
        name="AddPost"
        component={AddPost}
        options={{
          headerShown: false,

          tabBarIcon: ({color, size}) => (
            <MIcon name="add-circle" color={colors.ROSEY} size={32} />
          ),
          tabBarActiveTintColor: colors.ROSEY,
          tabBarInactiveTintColor: colors.lightTextColor,
          tabBarShowLabel: false,
        }}
      />

      <BottomStack.Screen
        name="Profile"
        options={{
          headerShown: false,

          tabBarIcon: ({color, size}) => (
            <MIcon name="person" color={colors.ROSEY} size={32} />
          ),
          tabBarActiveTintColor: colors.ROSEY,
          tabBarInactiveTintColor: colors.lightTextColor,
          tabBarShowLabel: false,
        }}>
        {() => <Profile uid={userInfo?.userID} />}
      </BottomStack.Screen>
    </BottomStack.Navigator>
  );
};

export default BottomNavigator;

const styles = StyleSheet.create({});
