import React from 'react';
import {ScrollView, TouchableOpacity} from 'react-native';
import Tags from './Tags';

const Footer = () => {
  return (
    <ScrollView horizontal>
      <TouchableOpacity>
        <Tags tag={'Arts & Culture'} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Tags tag={'Design'} />
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Footer;
