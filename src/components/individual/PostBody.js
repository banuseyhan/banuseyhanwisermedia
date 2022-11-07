import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

import {Linking} from 'react-native';

const videoId = 'CGzKnyhYDQI';

const PostBody = ({item}) => {
  return (
    <View style={styles.container}>
      <Text>
        Lorem ipsum dolor sit amet 🤔,{' '}
        <Text style={styles.tags}>@{item.firstName}</Text>
      </Text>
      <View style={styles.body}>
        <View>
          <TouchableOpacity
            onPress={() => {
              Linking.openURL(
                'https://www.youtube.com/watch?v=CGzKnyhYDQI&t=22s',
              );
            }}>
            <Image
              source={{uri: `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}}
              style={{
                width: '100%',
                height: 200,
              }}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.description}>
          <Text style={styles.sub}>
            This video is shared via <Text style={styles.subs}>youtube</Text>
          </Text>
          <Text numberOfLines={2} style={styles.dsc}>
            Lorem ipsum dolor sit amet
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

  description: {
    padding: 10,
    color: '#d5d1d1',
  },
  sub: {
    color: '#d5d1d1',
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
