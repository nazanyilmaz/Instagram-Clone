import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {colors} from '../utils/Colors';

const LButton = ({label, buttonStyle, labelStyle}) => {
  return (
    <TouchableOpacity style={styles.buttonStyle}>
      <Text style={styles.labelStyle}>{label}</Text>
    </TouchableOpacity>
  );
};

export default LButton;

const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: '#D3D3D3',

    paddingHorizontal: 50,
    paddingVertical: 7,

    borderRadius: 10,
  },
  labelStyle: {
    color: colors.GRAY,
    fontWeight: 'bold',
  },
});
