import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import firestore from '@react-native-firebase/firestore';
import {DataContext} from '../../context/context';
import PostCard from '../../components/PostCard';
import Header from '../../components/Header';

const MyPosts = () => {
  const {userInfo} = useContext(DataContext);
  const [posts, setPosts] = useState();

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
    <View
      style={{flex: 1, width: '100%', height: 400, backgroundColor: 'white'}}>
      <Header />
      <FlatList
        style={{flex: 1}}
        data={posts}
        renderItem={({item}) => <PostCard post={item} />}
      />
    </View>
  );
};

export default MyPosts;

const styles = StyleSheet.create({});
