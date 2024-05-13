import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import PIcon from './PIcon';
import {colors} from '../utils/Colors';

const Header = () => {
  return (
    <View style={styles.mainContainer}>
      <View>
        <Image
          style={styles.tinyLogo}
          source={require('../assests/images.png')}
        />
      </View>
      <View style={styles.iconBox}>
        <PIcon name={'add-circle-outline'} size={25} color={colors.ROSEY} />
        <PIcon name={'heart-outline'} size={25} color={colors.ROSEY} />
        <PIcon name={'logo-instagram'} size={25} color={colors.ROSEY} />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  tinyLogo: {
    width: 150,
    height: 50,
  },
  mainContainer: {
    backgroundColor: 'white',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  iconBox: {
    flexDirection: 'row',
    gap: 15,
  },
});
