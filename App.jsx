import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import RootNavigator from './src/navigators/RootNavigator';
import {DataProvider} from './src/context/context';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  return (
    <DataProvider>
      <SafeAreaView style={{flex: 1}}>
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
      </SafeAreaView>
    </DataProvider>
  );
};

export default App;

const styles = StyleSheet.create({});
