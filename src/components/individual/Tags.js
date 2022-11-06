import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Tags = ({tag}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.txt}>{tag}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderRadius: 20,
    borderColor: '#d5d1d1',
    borderWidth: 1,
    backgroundColor: '#F3F4F6',
    marginHorizontal: 5,
    marginTop: 10,
  },
  txt: {
    fontWeight: '600',
  },
});
export default Tags;
