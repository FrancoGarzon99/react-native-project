import React from 'react';
import { StyleSheet } from 'react-native';
import { Box, Stack, Text, Heading } from 'native-base';

interface ProductCardProps {
  id: string,
  code: string,
  name: string,
  price: string,
  brand: string,
  type: string,
  quantity: string;
}

const ProductCard = ({ code, name, brand, type, quantity, price }: ProductCardProps) => {
  return (
    <Box
      bg="white"
      shadow={2}
      rounded="lg"
      w="90%"
      maxW="90%"
      my="10px"
    >
      <Stack space={4} p={4}>
        <Text color="gray.400">Codigo : {code}</Text>
        <Heading size="md" noOfLines={2}>
          Producto : {name}
        </Heading>
        <Text lineHeight={[5, 5, 7]} noOfLines={2} color="gray.700">
          Marca: {brand}
        </Text>
        <Text lineHeight={[5, 5, 7]} noOfLines={2} color="gray.700">
          Tipo: {type}
        </Text>
        <Text lineHeight={[5, 5, 7]} noOfLines={2} color="gray.700">
          Stock: {quantity}
        </Text>
        <Text lineHeight={[5, 5, 7]} noOfLines={2} color="gray.700">
          Precio: ${price}
        </Text>
      </Stack>
    </Box>
  );
};

export default ProductCard;

const styles = StyleSheet.create({});
