import { ScrollView } from 'native-base';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import FormContainer from './NewProductoFormContainer/FormContainer';


const NewProduct = (props: any) => {

  return (
    <View style={stylesNewProduct.container}>
      <ScrollView>
        <FormContainer props={props} />
      </ScrollView>
    </View>
  );
};
const stylesNewProduct = StyleSheet.create({
  container: {
  }
});

export default NewProduct;

