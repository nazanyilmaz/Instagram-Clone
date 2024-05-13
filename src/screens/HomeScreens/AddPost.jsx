import {StyleSheet, Text, View} from 'react-native';
import React, {useState, useContext} from 'react';
import MyTextInput from '../../components/MyTextInput';
import MyButton from '../../components/MyButton';
import {colors} from '../../utils/Colors';
import firestore from '@react-native-firebase/firestore';
import {DataContext} from '../../context/context';
import {useNavigation} from '@react-navigation/native';
import MyPosts from './MyPosts';

const AddPost = () => {
  const navigation = useNavigation();
  const {setUserInfo, userInfo} = useContext(DataContext);

  const [newPost, setNewPost] = useState({
    postTitle: '',
    postDescription: '',
    postPhoto: '',
    userName: '',
    userPhoto: '',
    postUserId: '',
  });
  const onChangeText = (key, value) => {
    setNewPost({...newPost, [key]: value});
  };
  const addPost = (waddPost, userId) => {
    firestore()
      .collection('Post')
      .doc(userId)
      .collection('UserPost')
      .add({...waddPost, postId: null, postLikes: 0})
      .then(docInfo => {
        const postId = docInfo.id;
        docInfo
          .update({postId})
          .then(() => console.log('updated'))
          .catch(error => console.log(error));
        console.log('Post added!');
        setNewPost({postTitle: '', postDescription: '', postPhoto: ''});
      });
  };

  return (
    <View>
      <View style={{marginTop: 20}}>
        <Text
          style={{
            color: '#A17188',
            fontSize: 20,
            fontWeight: '700',
            textAlign: 'center',
          }}>
          Share a New Post
        </Text>
        <MyTextInput
          value={newPost.postTitle}
          placeholder={'Title'}
          onChangeText={text => onChangeText('postTitle', text)}
        />
        <MyTextInput
          value={newPost.postDescription}
          placeholder={'Description'}
          onChangeText={text => onChangeText('postDescription', text)}
        />
        <MyTextInput
          value={newPost.postPhoto}
          placeholder={'Photo'}
          onChangeText={text => onChangeText('postPhoto', text)}
        />
      </View>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <MyButton
          title={'Share'}
          style={styles.button}
          onPress={() => {
            addPost(
              {
                ...newPost,
                userPhoto: userInfo.photo,
                userName: userInfo.name,
                postUserId: userInfo.userID,
              },
              userInfo.userID,
            ),
              navigation.navigate('Profile');
          }}
        />
      </View>
    </View>
  );
};

export default AddPost;

const styles = StyleSheet.create({
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
