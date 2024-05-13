import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import PressableText from '../../components/PressableText';
import {colors} from '../../utils/Colors';
import SearchCard from '../../components/SearchCard';
import PIcon from '../../components/PIcon';
import firestore from '@react-native-firebase/firestore';
import {useNavigation} from '@react-navigation/native';

const SearchScreen = () => {
  const [searchQuery, setSearchQuary] = useState(null);
  const [resultAvaible, setResultAvaible] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const navigation = useNavigation();
  const handleSearch = query => {
    setSearchQuary(query);

    firestore()
      .collection('Users')
      .where('name', '==', query)
      .get()
      .then(querySnapshot => {
        const users = [];
        setResultAvaible(true);
        querySnapshot.forEach(documentSnapshot => {
          //  console.log(documentSnapshot.data());

          const user = documentSnapshot.data();
          users.push(user);
        });
        setSearchResults(users);
      });
    if (!searchResults) {
      setResultAvaible(false);
    } else {
      setResultAvaible(true);
    }
  };

  return (
    <View style={{backgroundColor: 'white'}}>
      <View style={styles.searchConatainer}>
        <View style={styles.mainContainer}>
          <PIcon name={'search'} color={colors.ROSEY} size={25} />
          <TextInput
            value={searchQuery}
            onChangeText={text => handleSearch(text)}
            placeholder="Search"
          />
        </View>
        <PressableText
          label={'Cancel'}
          style={{color: colors.ROSEY, fontSize: 15, fontWeight: 'bold'}}
        />
      </View>

      {resultAvaible == false ? (
        <SearchCard
          onPress={() =>
            navigation.navigate('ProfileScreen', {
              uid: searchResults[0]?.userID,
            })
          }
          uName={'Nazan Yilmaz'}
          uNickName={'n_z_n'}
          uPhoto={
            'https://pbs.twimg.com/profile_images/1666792824656875522/YgPO2b-j_400x400.jpg'
          }
        />
      ) : (
        <SearchCard
          onPress={() =>
            navigation.navigate('ProfileScreen', {
              uid: searchResults[0]?.userID,
            })
          }
          uName={searchResults[0]?.name}
          uNickName={searchResults[0]?.name}
          uPhoto={searchResults[0]?.photo}
        />
      )}
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  searchConatainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderBottomWidth: 0.3,
    gap: 15,
  },
  mainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
    backgroundColor: colors.TGRAY,
    padding: 15,
    flex: 1,
    borderRadius: 30,
  },
});
