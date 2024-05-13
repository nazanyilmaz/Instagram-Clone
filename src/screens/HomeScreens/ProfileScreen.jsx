import {FlatList, StyleSheet, View} from 'react-native';
import React, {useContext, useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Text} from 'react-native-paper';
import MyFastImage from '../../components/MyFastImage';
import {DataContext} from '../../context/context';
import {colors} from '../../utils/Colors';
import PIcon from '../../components/PIcon';
import SButton from '../../components/SButton';
import firestore from '@react-native-firebase/firestore';
import LButton from '../../components/LButton';
import auth from '@react-native-firebase/auth';

const ProfileScreen = ({uid, route}) => {
  const {userInfo} = useContext(DataContext);
  const navigation = useNavigation();

  const [posts, setPosts] = useState();
  //const [userInfo, setUserInfo] = useState(userInfo);
  const [activeChanger, setActiveChanger] = useState(0);
  //const [searchUid, setSearchUid] = useState(route?.params.uid.userID);
  //const [bottomUid, setBottomUid] = useState(uid);
  const [isFollowing, setIsFollowing] = useState(false);
  //const [targetUser, setTargetUser] = useState(route?.params.uid);

  useEffect(() => {
    const subscriber = firestore()
      .collection('Post')
      .doc(userInfo?.userID)
      .collection('UserPost')
      .onSnapshot(QuerySnapshot => {
        let postArray = [];
        QuerySnapshot._docs.map(p => {
          //console.log(p._data);
          postArray.push(p._data);
          setPosts(postArray);
        });
      });

    // Stop listening for updates when no longer required
    return () => subscriber();
  }, [userInfo?.userID]);
  //console.log(posts);

  return (
    <View style={styles.mainContainer}>
      <View style={styles.topContainer}>
        <View style={styles.headContainer}>
          <PIcon name={'arrow-back-outline'} size={25} color={colors.ROSEY} />
          <Text style={styles.name}>{userInfo?.name}</Text>
          <PIcon
            name={'settings-outline'}
            size={25}
            color={colors.ROSEY}
            onPress={() => auth().signOut()}
          />
        </View>
        <View style={styles.userBar}>
          <MyFastImage image={userInfo?.photo} style={styles.profilePhoto} />
          <View style={styles.rightSide}>
            <View style={styles.userItem}>
              <Text style={{fontWeight: 'bold'}}>{userInfo?.postCount}</Text>
              <Text style={{color: colors.GRAY}}>Posts</Text>
            </View>
            <View style={styles.userItem}>
              <Text style={{fontWeight: 'bold'}}>
                {userInfo?.followingCount}
              </Text>
              <Text style={{color: colors.GRAY}}>Following</Text>
            </View>
            <View style={styles.userItem}>
              <Text style={{fontWeight: 'bold', alignItems: 'center'}}>
                {userInfo?.followersCount}
              </Text>
              <Text style={{color: colors.GRAY}}>Followers</Text>
            </View>
          </View>
        </View>
        <View style={styles.userInfoBar}>
          <Text style={styles.name}>{userInfo?.name}</Text>
          <Text style={{color: colors.GRAY}}>
            {userInfo?.profession} / {userInfo?.country}
          </Text>
          <Text style={{color: colors.GRAY}}>Takip eden info bar</Text>
        </View>

        {uid == userInfo?.userID ? (
          <View style={styles.buttonBar}>
            <SButton label={'Edit profile'} />
            <LButton label={'Share profile'} />
            <PIcon name={'person-add'} size={25} color={colors.ROSEY} />
          </View>
        ) : (
          <View style={styles.buttonBar}>
            <SButton
              label={isFollowing ? 'Follow' : 'Unfollow'}
              //onPress={toggleFollow}
            />
            <LButton label={'Message'} />
            <PIcon name={'person-add'} size={25} color={colors.ROSEY} />
          </View>
        )}

        <View style={styles.changerBar}>
          <PIcon
            name={'apps-outline'}
            size={30}
            style={
              activeChanger == 0 ? styles.leftChangerActive : styles.changer
            }
            onPress={() => setActiveChanger(0)}
          />
          <PIcon
            name={'image-outline'}
            size={30}
            style={
              activeChanger == 1 ? styles.rightChangerActive : styles.changer
            }
            onPress={() => setActiveChanger(1)}
          />
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <FlatList
          numColumns={3}
          horizontal={false}
          data={posts}
          renderItem={({item}) => {
            return (
              <View style={styles.col}>
                <MyFastImage
                  style={styles.galleryImage}
                  image={item.postPhoto}
                />
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  name: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  mainContainer: {
    flex: 1,
  },
  topContainer: {
    backgroundColor: 'white',
  },
  headContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 20,
    backgroundColor: 'white',
  },
  userBar: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingTop: 1,
    backgroundColor: 'white',
  },
  profilePhoto: {
    marginVertical: 20,
    width: 70,
    height: 70,
    borderRadius: 200,
    borderWidth: 3,
    borderColor: colors.ROSEY,
    flex: 1,
  },
  rightSide: {
    marginStart: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 5,
  },

  userInfoBar: {
    paddingHorizontal: 20,
    paddingBottom: 15,
    backgroundColor: 'white',
  },

  bottomContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  buttonBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 15,
    backgroundColor: 'white',
    gap: 5,
    marginHorizontal: 15,
  },
  changerBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: 'white',
  },
  galleryImage: {
    flex: 1,
    aspectRatio: 1 / 1,
    padding: 0.5,
  },
  col: {
    flex: 1 / 3,
  },
  changer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 2,
  },
  leftChangerActive: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 2,
    borderBlockColor: colors.ROSEY,
    borderRadius: 50,
  },
  rightChangerActive: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 2,
    borderBlockColor: colors.ROSEY,
    borderRadius: 50,
  },
});
