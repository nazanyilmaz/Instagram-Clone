import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const MyButton = ({title, color, onPress, style}) => {
  return (
    <TouchableOpacity onPress={onPress} color={color} style={style}>
      <Text style={{color: 'white', fontSize: 18, fontWeight: '500'}}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default MyButton;

const styles = StyleSheet.create({});
