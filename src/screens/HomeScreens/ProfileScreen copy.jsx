import {StyleSheet, View} from 'react-native';
import React, {useContext} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Text} from 'react-native-paper';
import MyFastImage from '../../components/MyFastImage';
import {DataContext} from '../../context/context';
import auth from '@react-native-firebase/auth';
import InfoCard from '../../components/InfoCard';
import {colors} from '../../utils/Colors';
import MIcon from '../../components/MIcon';
import MyButton from '../../components/MyButton';

const ProfileScreen = () => {
  const {avaibleUser, setAvaibleUSer, setUserInfo, userInfo} =
    useContext(DataContext);
  const navigation = useNavigation();
  //auth().signOut();
  // console.log(userInfo);
  return (
    <View>
      <View style={styles.topBox}>
        <MyFastImage image={userInfo?.photo} style={styles.profilePhoto} />
        <Text style={styles.nameText}>{userInfo?.name}</Text>
        <MIcon
          style={styles.iconBox}
          name={'document-text'}
          size={35}
          color={colors.WHITE}
        />
      </View>
      <View style={styles.bottomBox}>
        <InfoCard
          label={'Email'}
          labelValue={userInfo?.email}
          iconName={'mail'}
        />
        <InfoCard
          label={'Profession'}
          labelValue={userInfo?.profession}
          iconName={'school'}
        />
        <InfoCard
          label={'Country'}
          labelValue={userInfo?.country}
          iconName={'location'}
        />
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
          gap: 40,
        }}>
        <MyButton
          title={'Sign Out'}
          onPress={() => auth().signOut()}
          style={styles.button}
        />
        <MyButton
          title={'Setting'}
          onPress={() => navigation.navigate('SettingsScreen')}
          style={styles.button}
        />
      </View>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  topBox: {
    backgroundColor: colors.ROSEY,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  profilePhoto: {
    marginVertical: 20,
    width: 150,
    height: 150,
    borderRadius: 200,
    borderWidth: 3,
    borderColor: 'white',
  },
  nameText: {
    fontSize: 35,
    fontWeight: '600',
    color: colors.WHITE,
    marginBottom: 10,
  },
  iconBox: {
    position: 'absolute',
    right: 14,
    top: 14,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 50,
    borderRadius: 100,
    width: 150,
    height: 50,
    backgroundColor: colors.ROSEY,
  },
});
