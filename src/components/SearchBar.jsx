import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import PIcon from './PIcon';
import {colors} from '../utils/Colors';

const SearchBar = () => {
  return (
    <View style={styles.mainContainer}>
      <PIcon name={'search'} color={colors.ROSEY} size={25} />
      <TextInput placeholder="Search" />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
    backgroundColor: colors.TGRAY,
    padding: 15,

    flex: 1,
    borderRadius: 30,
  },
});
