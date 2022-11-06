import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

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
    color: '#1441e2',
  },
  body: {
    borderWidth: 1,
    borderColor: '#d5d1d1',
    marginTop: 10,
  },
  postImg: {
    width: '100%',
    height: 3,
  },

  description: {
    padding: 10,
  },
  subs: {
    color: '#EF4444',
  },
  dsc: {
    paddingTop: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
});
export default PostBody;
