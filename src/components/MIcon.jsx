import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

const MIcon = ({style, size, name, color, focused}) => {
  return (
    <View style={style}>
      <Icon name={name} size={size} color={color} focused={focused} />
    </View>
  );
};

export default MIcon;

const styles = StyleSheet.create({});
