import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


const PostBody = ({item}) => {
  return (
    <View style={styles.container}>
      <Text>
        Lorem ipsum dolor sit amet 🤔,{' '}
        <Text style={styles.tags}>@{item.firstName}</Text>
      </Text>
      <View style={styles.body}>
        <View>
          <Image
            resizeMode="stretch"
            source={{
              uri: 'https://http2.mlstatic.com/D_NQ_NP_996851-MLM42944683980_072020-O.jpg',
            }}
            style={styles.postImg}
          />
          <Icon
            name={'play-circle'}
            size={100}
            color={'rgba(226,220,220,0.8)'}
            style={styles.icon}
          />
        </View>
        <View style={styles.description}>
          <Text>
            Lorem ipsum dolor sit amet <Text style={styles.subs}>Lorem</Text>
          </Text>
          <Text numberOfLines={2} style={styles.dsc}>
            {item.userAgent}
          </Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
  },
  tags: {
    color: 'blue',
  },
  body: {
    borderWidth: 1,
    borderColor:'gray',
    marginTop: 10,
  },
  postImg: {
    width: '100%',
    height: 3,
  },
  icon: {
    position: 'absolute',
    alignSelf: 'center',
    top: 10,
  },
  description: {
    padding: 10,
  },
  subs: {
    color: 'red',
  },
  dsc: {
    paddingTop: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
});
export default PostBody;
