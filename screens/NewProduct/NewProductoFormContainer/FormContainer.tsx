import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import ModalScanNextProduct from '../ModalNextProduct/ModalScanNextProduct';
import FormNewProduct from './FormNewProduct';
import ModalScanner from './ModalScanner';

const FormContainer = (props: any) => {
  const [ShowHideScanner, setShowHideScanner] = useState<boolean>(false);
  const [dataStringScanner, setDataStringScanner] = useState<{ type: string, data: string; } | undefined>(undefined);
  const [showNotificationModal, setShowNotificationModal] = useState<boolean>(false);

  return (
    <View>
      <FormNewProduct fnNavigation={props} dataStringScanner={dataStringScanner} setShowHideScanner={setShowHideScanner} />
      <ModalScanner ShowHideScanner={ShowHideScanner} setShowHideScanner={setShowHideScanner} setDataStringScanner={setDataStringScanner} />
    </View>
  );
};

export default FormContainer;

const styles = StyleSheet.create({});
