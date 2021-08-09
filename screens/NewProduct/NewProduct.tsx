import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FormContainer from './NewProductoFormContainer/FormContainer';

const NewProduct = () => {
  return (
    <View style={stylesNewProduct.container}>
      <FormContainer />
    </View>
  );
};
const stylesNewProduct = StyleSheet.create({
  container: {
  }
});

export default NewProduct;

