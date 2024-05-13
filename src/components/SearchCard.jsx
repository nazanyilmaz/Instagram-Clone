import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import MyFastImage from './MyFastImage';
import {colors} from '../utils/Colors';
import PIcon from './PIcon';
import SButton from './SButton';

const SearchCard = ({uName, uNickName, uPhoto, onPress}) => {
  return (
    <TouchableOpacity style={styles.mainBox} onPress={onPress}>
      <View style={styles.userBar}>
        <MyFastImage style={styles.searchPhoto} image={uPhoto} />
        <View styel={styles.userInfo}>
          <Text style={{fontSize: 18, fontWeight: 'bold', color: colors.ROSEY}}>
            {uName}
          </Text>
          <Text style={{fontSize: 12}}>{uNickName}</Text>
        </View>
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center', gap: 3}}>
        <SButton label={'Follow'} color={colors.ROSEY} />
        <PIcon name={'close'} size={20} color={colors.ROSEY} />
      </View>
    </TouchableOpacity>
  );
};

export default SearchCard;

const styles = StyleSheet.create({
  searchPhoto: {
    marginVertical: 20,
    width: 70,
    height: 70,
    borderRadius: 200,
    borderWidth: 3,
    borderColor: colors.ROSEY,
  },
  mainBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  userBar: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
});
