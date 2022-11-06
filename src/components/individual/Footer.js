import React from 'react';
import {ScrollView} from 'react-native';
import Tags from './Tags';

const Footer = () => {
  return (
    <ScrollView horizontal>
      <Tags tag={'Arts & Culture'} />
      <Tags tag={'Design'} />
    </ScrollView>
  );
};

export default Footer;
