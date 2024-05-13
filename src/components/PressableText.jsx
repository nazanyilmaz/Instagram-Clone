import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const PressableText = ({label, style}) => {
  return (
    <TouchableOpacity>
      <Text style={style}>{label}</Text>
    </TouchableOpacity>
  );
};

export default PressableText;

const styles = StyleSheet.create({});
