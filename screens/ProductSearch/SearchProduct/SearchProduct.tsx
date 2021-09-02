import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Dispatch, SetStateAction } from 'hoist-non-react-statics/node_modules/@types/react';
import ModalScanner from '../../NewProduct/NewProductoFormContainer/ModalScanner';



interface SearchProductProps {
  ShowHideScanner: boolean;
  setShowHideScanner: Dispatch<SetStateAction<boolean>>;
  setDataSearch: Dispatch<SetStateAction<{ type: string, data: string; } | undefined>>;
}

const SearchProduct = ({ setShowHideScanner, ShowHideScanner, setDataSearch }: SearchProductProps) => {
  return (
    <View>
      <ModalScanner ShowHideScanner={ShowHideScanner} setDataStringScanner={setDataSearch} setShowHideScanner={setShowHideScanner} />
    </View>
  );
};

const styles = StyleSheet.create({ });

export default SearchProduct;