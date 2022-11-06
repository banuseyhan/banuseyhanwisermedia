import React from 'react';
import {View} from 'react-native';
//components
import PostBody from './PostBody';
import Header from './Header';
import Footer from './Footer';

const Card = ({item}) => {
  return (
    <View style={styles.container}>
      <Header item={item} />
      <PostBody item={item} />
      <Footer />
    </View>
  );
};
const styles = {
  container: {
    backgroundColor: '#FFF',
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderColor: '#d5d1d1',
    marginTop: 10,
    padding: 15,
  },
};
export default Card;
