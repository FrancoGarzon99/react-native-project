import React, { useEffect } from 'react';
import { Button, Text, View, ScrollView, StyleSheet } from 'react-native';
import Firebase from '../../DataBase/Firebase';

interface Props {

}

const ProductSearch = (props: Props) => {

  const [dataSearch, setDataSearch] = React.useState({});

  useEffect(() => {

    FirebaseData();
  }, []);

  const FirebaseData = async () => {
    const dataDocument = await Firebase.db.collection('products')
      .where("code", "==", "7909189091713")
      .get();

    dataDocument.forEach(querySnapshot => console.log(querySnapshot.data()));

  };

  return (
    <View style={styleProduct.containerProductSearch}>
      <View style={styleProduct.buttonsProductSearch}>
        <Button title="Buscar un Producto" onPress={() => console.log("buscar producto")} />
        <Button title="Crear lista de Productos" onPress={() => console.log("buscar producto")} />
      </View>
      <ScrollView>
      </ScrollView>
    </View>
  );
};
const styleProduct = StyleSheet.create({
  containerProductSearch: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",

  },
  buttonsProductSearch: {

  }
});
export default ProductSearch;
