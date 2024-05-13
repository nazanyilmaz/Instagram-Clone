import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import FastImage from 'react-native-fast-image';

const MyFastImage = ({image, style}) => {
  return (
    <FastImage
      style={style}
      source={{
        uri: image,
        headers: {Authorization: 'someAuthToken'},
        priority: FastImage.priority.normal,
      }}
      resizeMode={FastImage.resizeMode.cover}
    />
  );
};

export default MyFastImage;

const styles = StyleSheet.create({});
