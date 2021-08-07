import React from 'react';
import { View, Text } from 'react-native';
import Layout from '../../components/Layout/Layout';

interface Props {

}

const Home = (props: Props) => {
  return (
    <Layout>
      <Text>Hola soy la home</Text>
    </Layout>
  );
};

export default Home;
