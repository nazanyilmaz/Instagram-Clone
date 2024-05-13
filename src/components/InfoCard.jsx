import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Text} from 'react-native-paper';
import MIcon from './MIcon';
import {colors} from '../utils/Colors';

const InfoCard = ({label, labelValue, iconName}) => {
  return (
    <View style={styles.infoCard}>
      <MIcon
        style={styles.iconBox}
        name={iconName}
        size={40}
        color={colors.ROSEY}
      />
      <View style={styles.infoBox}>
        <Text style={{color: colors.ROSEY, fontSize: 24, fontWeight: '600'}}>
          {label}
        </Text>
        <Text style={{color: colors.GRAY, fontSize: 16, fontWeight: '400'}}>
          {labelValue}
        </Text>
      </View>
    </View>
  );
};

export default InfoCard;

const styles = StyleSheet.create({
  infoCard: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
    paddingVertical: 25,
    marginStart: 10,
    borderBottomWidth: 1,
    borderColor: colors.ROSEY,
    borderRadius: 70,
  },
  iconBox: {
    borderWidth: 2,
    width: 70,
    height: 70,
    borderRadius: 100,
    borderColor: colors.ROSEY,
    alignItems: 'center',
    justifyContent: 'center',
  },
  infoBox: {
    gap: 5,
  },
});
