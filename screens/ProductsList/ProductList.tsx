import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { ScrollView, Box, Image, Stack, Heading, Text, Center, View, Spinner } from 'native-base';
import firebase from '../../dataBase/Firebase';
import ProductCard from '../../components/Reusables/Cards/ProductCard';


interface Props {

}

const ProductList = (props: Props) => {

  const [listProducts, setListProducts] = useState<undefined | Array<any>>(undefined);

  useEffect(() => {

    firebase.db.collection('products').onSnapshot((querySnapshot) => {
      const productsList: any = [];
      querySnapshot.docs.forEach(doc => {
        const { code, name, brand, type, quantity, price } = doc.data();
        productsList.push({
          id: doc.id,
          code,
          name,
          price,
          brand,
          type,
          quantity
        });
      });
      setListProducts(productsList);
    });

  }, []);


  return (
    <ScrollView >
      <View>
        <Center>
          {listProducts ? listProducts?.map((p: any) => (
            <ProductCard key={p.id} price={p.price} quantity={p.quantity} name={p.name} type={p.type} code={p.code} brand={p.brand} id={p.id} />
          )) : <Spinner color="blue.500" />}
        </Center>
      </View>
    </ScrollView>
  );
};
const stylesProductsList = StyleSheet.create({ });
export default ProductList;
