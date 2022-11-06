import React, {useState} from 'react';
import {Text, TouchableOpacity, View, Image, StyleSheet} from 'react-native';
import Modals from './Modals';



const Header = ({item}) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => setModalVisible(!isModalVisible);
  const closeModal = () => setModalVisible(false);
  return (
    <View style={styles.Container}>
      <Image source={{uri: item.image}} style={styles.userImg} />
      <View style={styles.info}>
        <View style={styles.nameContainer}>
          <Text style={styles.name}>
            {item.firstName} {item.lastName}
          </Text>
          <Text style={styles.minute}>{item.age}m</Text>
        </View>
        <Text>{item.company.title}</Text>
      </View>
      <TouchableOpacity onPress={toggleModal}>
        <Text size={30}>...</Text>
      </TouchableOpacity>
      <Modals isModalVisible={isModalVisible} closeModal={closeModal} />
    </View>
  );
};
const styles = StyleSheet.create({
  Container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userImg: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  info: {
    paddingLeft: 10,
    flex: 1,
  },
  nameContainer: {
    flexDirection: 'row',
  },
  name: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  minute: {
    color: 'gray',
    paddingLeft: 5,
  },
});
export default Header;
