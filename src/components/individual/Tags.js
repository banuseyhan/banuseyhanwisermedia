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
    borderColor: 'gray',
    borderWidth: 1,
    backgroundColor: 'gray100',
    marginHorizontal: 5,
    marginTop: 10,
  },
  txt: {
    fontWeight: '600',
  },
});
export default Tags;
