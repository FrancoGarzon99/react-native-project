import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FormNewProduct from './FormNewProduct';
import ModalScanner from './ModalScanner';

const FormContainer = () => {
  const [ShowHideScanner, setShowHideScanner] = useState<boolean>(false);
  const [dataStringScanner, setDataStringScanner] = useState<{ type: string, data: string; } | undefined>(undefined);

  return (
    <View>
      <FormNewProduct dataStringScanner={dataStringScanner} setShowHideScanner={setShowHideScanner} />
      <ModalScanner ShowHideScanner={ShowHideScanner} setShowHideScanner={setShowHideScanner} setDataStringScanner={setDataStringScanner} />
    </View>
  );
};

export default FormContainer;

const styles = StyleSheet.create({});
