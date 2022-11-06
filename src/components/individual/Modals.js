import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  Platform,
  StyleSheet,
} from 'react-native';
import Modal from 'react-native-modal';

const Modals = ({isModalVisible, closeModal}) => {
  return (
    <Modal
      avoidKeyboard
      useNativeDriver={true}
      backdropOpacity={0.6}
      swipeDirection="down"
      isVisible={isModalVisible}
      animationInTiming={200}
      animationOutTiming={200}
      propagateSwipe={true}
      onBackdropPress={closeModal}
      style={[
        styles.container,
        {marginBottom: Platform.OS === 'android' && 10},
      ]}>
      <SafeAreaView>
        <TouchableOpacity onPress={closeModal} style={styles.mainContainer}>
          <Text style={[styles.buttonTitle, {color: '#EF4444'}]}>Delete</Text>
          <View style={styles.divider} />
          <Text style={styles.buttonTitle}>Share</Text>
          <View style={{borderBottomWidth: 1, borderColor: '#d5d1d1'}} />
          <Text style={styles.buttonTitle}>Add to Curation</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={closeModal} style={styles.cancelButton}>
          <Text style={styles.buttonTitle}>Cancel</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </Modal>
  );
};
const styles = StyleSheet.create({
  container: {
    margin: 0,
    justifyContent: 'flex-end',
  },
  mainContainer: {
    borderRadius: 15,
    backgroundColor:'#FFF',
    margin: 10,
  },
  buttonTitle: {
    textAlign: 'center',
    padding: 15,
    fontSize: 17,
  },
  divider: {
    borderBottomWidth: 1,
    borderColor: '#d5d1d1',
  },
  cancelButton: {
    borderRadius: 15,
    backgroundColor: '#FFF',
    marginHorizontal: 10,
  },
});
export default Modals;
