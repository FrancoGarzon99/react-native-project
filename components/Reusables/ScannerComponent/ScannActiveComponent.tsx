import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { Dispatch, SetStateAction } from 'hoist-non-react-statics/node_modules/@types/react';
import { useToast } from 'native-base';

interface ScannActiveComponentProps {
  ShowHideScanner: boolean;
  returnScanned: boolean;
  setReturnScanned: Dispatch<SetStateAction<boolean>>;
  setDataStringScanner: Dispatch<SetStateAction<{ type: string, data: string; } | undefined>>;
  setShowHideScanner: Dispatch<SetStateAction<boolean>>;
}
const ScannActiveComponent = ({ ShowHideScanner, returnScanned, setReturnScanned, setDataStringScanner, setShowHideScanner }: ScannActiveComponentProps) => {


  const toast = useToast();
  const [hasPermission, setHasPermission] = useState<null | boolean>(null);
  const [dataScanned, setDataScanned] = useState<{ type: string, data: string; } | undefined>();

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }: any) => {
    setDataScanned({ type: type, data: data });
    setDataStringScanner({ type: type, data: data });
    setShowHideScanner(false);
    setReturnScanned(true);
    toast.show({
      title: "Producto Escaneado!",
      status: "success",
      isClosable: false
    });
  };

  return (
    <View>
      <View style={styles.containerScann}>
        {ShowHideScanner && hasPermission === true &&
          <BarCodeScanner
            onBarCodeScanned={returnScanned ? undefined : handleBarCodeScanned}
            style={StyleSheet.absoluteFillObject}
          />}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerScann: {
    flex: 1,
    width: "100%",
    height: 400,
  }
});
export default ScannActiveComponent;