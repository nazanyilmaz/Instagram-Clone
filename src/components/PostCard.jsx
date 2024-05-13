import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {colors} from '../utils/Colors';
import MyFastImage from './MyFastImage';
import PressableText from './PressableText';
import PIcon from './PIcon';
import firestore from '@react-native-firebase/firestore';

const PostCard = ({post}) => {
  const [saved, setSaved] = useState(false);
  const [liked, setLiked] = useState(post.isLiked);

  useEffect(() => {
    checkSavedPost();
  }, []);

  const checkSavedPost = async () => {
    try {
      const userSavedPostRef = firestore()
        .collection('SavedPosts')
        .doc(post.postUserId)
        .collection('UserSavedPost');

      const snapShot = await userSavedPostRef.doc(post.postId).get();
      const isPostSaved = snapShot.exists;
      setSaved(isPostSaved);
    } catch (error) {
      console.log('fetch saved post', error);
    }
  };

  const savePost = () => {
    setSaved(!saved);
    const userSavedPostRef = firestore()
      .collection('SavedPosts')
      .doc(post.postUserId)
      .collection('UserSavedPost');
    if (saved) {
      userSavedPostRef
        .doc(post.postId)
        .delete()
        .then(() => {
          console.log('Deleted');
        })
        .catch(error => console.log(error));
    } else {
      userSavedPostRef
        .doc(post.postId)
        .set(post)
        .then(() => {
          console.log('saved');
        })
        .catch(error => console.log('do not saved'));
    }
  };

  const incrementPostLikes = (userId, postId) => {
    const postRef = firestore()
      .collection('Post')
      .doc(userId)
      .collection('UserPost')
      .doc(postId);

    if (liked) {
      postRef
        .update({
          postLikes: firestore.FieldValue.increment(1),
          isLiked: false,
        })
        .then(() => {
          console.log('liked geri alindi');
          setLiked(false);
        })
        .catch(error => console.log(error));
    } else {
      postRef
        .update({
          postLikes: firestore.FieldValue.increment(1),
          isLiked: true,
        })
        .then(() => {
          console.log('liked');
          setLiked(true);
        })
        .catch(error => console.log(error));
    }
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.topContainer}>
        <View style={styles.topLeftSide}>
          <View>
            <MyFastImage style={styles.profileImage} image={post?.userPhoto} />
          </View>
          <View>
            <Text style={styles.boldText}>{post?.userName}</Text>
            <Text>{post.postTitle}</Text>
          </View>
        </View>
        <PIcon name="ellipsis-horizontal" color={colors.ROSEY} size={24} />
      </View>

      <View style={styles.imageContainer}>
        <MyFastImage style={styles.postImage} image={post?.postPhoto} />
      </View>

      <View style={styles.iconsContainer}>
        <View style={styles.leftSide}>
          <PIcon
            name={liked ? 'heart' : 'heart-outline'}
            color={liked ? 'red' : 'black'}
            size={24}
            onPress={() => incrementPostLikes(post.postUserId, post.postId)}
          />
          <PIcon name={'chatbubble-outline'} size={24} />
          <PIcon name={'paper-plane-outline'} size={24} />
        </View>
        <View style={styles.rightSide}>
          <PIcon
            name={saved ? 'bookmark' : 'bookmark-outline'}
            size={24}
            onPress={() => savePost(post.postUserId, post.postId, post)}
          />
        </View>
      </View>

      <View style={styles.bottomWrap}>
        <PressableText style={styles.lightText} label={post.postLikes} />
        <PressableText style={styles.boldText} label={post?.userName} />
        <PressableText style={styles.lightText} label={post?.postDescription} />
      </View>
    </View>
  );
};

export default PostCard;

const styles = StyleSheet.create({
  mainContainer: {
    paddingVertical: 7,
  },
  topLeftSide: {
    flexDirection: 'row',
    gap: 15,
    alignItems: 'center',
  },
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 15,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 100,
  },
  postImage: {
    width: '100%',
    height: 450,
    borderRadius: 10,
    objectFit: 'contain',
  },
  leftSide: {
    flexDirection: 'row',
    gap: 10,
  },
  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
  },
  bottomWrap: {
    paddingHorizontal: 5,
    gap: 2,
  },
  boldText: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  lightText: {
    color: colors.lightTextColor,
  },
});
