import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {colors} from '../utils/Colors';

const SButton = ({label, buttonStyle, labelStyle, onPress}) => {
  return (
    <TouchableOpacity style={styles.buttonStyle} onPress={onPress}>
      <Text style={styles.labelStyle}>{label}</Text>
    </TouchableOpacity>
  );
};

export default SButton;

const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: colors.ROSEY,
    color: colors.WHITE,
    paddingHorizontal: 30,
    paddingVertical: 7,

    borderRadius: 10,
  },
  labelStyle: {
    color: colors.WHITE,
    fontWeight: 'bold',
  },
});
