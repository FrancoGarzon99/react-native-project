import React, { useState } from 'react';
import { View } from 'react-native';
import FormNewProduct from './FormNewProduct';
import ModalScanner from './ModalScanner';

const FormContainer = (props: any) => {
  const [ShowHideScanner, setShowHideScanner] = useState<boolean>(false);
  const [dataStringScanner, setDataStringScanner] = useState<{ type: string, data: string; } | undefined>(undefined);

  return (
    <View>
      <FormNewProduct fnNavigation={props} dataStringScanner={dataStringScanner} setShowHideScanner={setShowHideScanner} />
      <ModalScanner ShowHideScanner={ShowHideScanner} setShowHideScanner={setShowHideScanner} setDataStringScanner={setDataStringScanner} />
    </View>
  );
};

export default FormContainer;

