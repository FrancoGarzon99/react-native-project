import React, { useState, useEffect } from 'react';
import { Button, StyleSheet } from 'react-native';
import Firebase from '../../dataBase/Firebase';
import SearchProduct from './SearchProduct/SearchProduct';
import { Box, Text, View, ScrollView, Spinner } from 'native-base';

interface Props {

}

const ProductSearch = (props: Props) => {

  const [ShowHideScanner, setShowHideScanner] = useState<boolean>(false);
  const [dataStringScanner, setDataStringScanner] = useState<{ type: string, data: string; } | undefined>(undefined);
  const [productSearchRequest, setProductSearchRequest] = useState<Array<any>>([]);

  useEffect(() => {
    FirebaseData();
  }, [dataStringScanner !== undefined]);

  const FirebaseData = async () => {
    return await Firebase.db.collection('products')
      .where("code", "==", `${dataStringScanner?.data}`)
      .get().then(querySnapshot => {
        if (querySnapshot.empty) {
          console.log('El Producto que buscas no existe!');
        } else {
          querySnapshot.forEach(documentSnapshot => setProductSearchRequest([...productSearchRequest, documentSnapshot.data()]));
        }
      });
  };
  console.log(productSearchRequest, 'Productos');
  return (
    <View>
      <View>
        <Button title="Buscar Producto" onPress={() => {
          setShowHideScanner(!ShowHideScanner);
          setDataStringScanner(undefined);
        }} />
        <Button title="Crear lista de Productos" onPress={() => console.log("buscar producto")} />
      </View>
      <View>
        <SearchProduct ShowHideScanner={ShowHideScanner} setShowHideScanner={setShowHideScanner} setDataSearch={setDataStringScanner} />
      </View>
      <ScrollView>
        {productSearchRequest.length > 0 ? productSearchRequest.map(item => (
          <Box key={item.code} bg="white" shadow={3} rounded="lg" maxWidth="90%">
            <Text>{item.brand}</Text>
            <Text>{item.name}</Text>
            <Text>{item.code}</Text>
            <Text>{item.price}</Text>
          </Box>
        )) :
          <Spinner color="blue.500" />
        }
      </ScrollView>

    </View>
  );
};
const styleProduct = StyleSheet.create({

});
export default ProductSearch;
