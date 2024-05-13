import {StyleSheet, TextInput, View} from 'react-native';
import React from 'react';
import {colors} from '../utils/Colors';

const MyTextInput = ({placeholder, onChangeText, value}) => {
  return (
    <View>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={colors.WHITE}
        style={styles.input}
        onChangeText={onChangeText}
        value={value}
      />
    </View>
  );
};

export default MyTextInput;

const styles = StyleSheet.create({
  input: {
    backgroundColor: colors.ROSEY,
    padding: 15,
    margin: 15,
    borderRadius: 12,
    shadowColor: '#A17188',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
  },
});
