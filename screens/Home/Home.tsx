import React from 'react';
import { View, Text } from 'react-native';
import Layout from '../../components/Reusables/Layout/Layout';
import { NavigationType } from '../../components/Reusables/MenuBar/MenuBar';


const Home = (props: NavigationType) => {
  return (
    <Layout propsNavigation={props}>
      <Text>Hola soy la home</Text>
    </Layout>
  );
};

export default Home;
