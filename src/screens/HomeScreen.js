import {View, Text, Button} from 'react-native';
import React from 'react';

const HomeScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, padding: 24}}>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Welcome to Wiser</Text>
        <Button
          title="Go to Individual View"
          onPress={() => navigation.navigate('Individual View')}
        />
      </View>
    </View>
  );
};

export default HomeScreen;
