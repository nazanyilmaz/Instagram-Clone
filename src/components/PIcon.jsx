import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

const PIcon = ({style, size, name, color, onPress}) => {
  return (
    <TouchableOpacity style={style}>
      <Icon name={name} size={size} color={color} onPress={onPress} />
    </TouchableOpacity>
  );
};

export default PIcon;

const styles = StyleSheet.create({});
