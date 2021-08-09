import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, Alert } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { Dispatch, SetStateAction } from 'hoist-non-react-statics/node_modules/@types/react';

interface ScannActiveComponentProps {
  ShowHideScanner: boolean;
  returnScanned: boolean;
  setReturnScanned: Dispatch<SetStateAction<boolean>>;
  setDataStringScanner: Dispatch<SetStateAction<{ type: string, data: string; } | undefined>>;

}
const ScannActiveComponent = ({ ShowHideScanner, returnScanned, setReturnScanned, setDataStringScanner }: ScannActiveComponentProps) => {
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
    setReturnScanned(true);
  };


  return (
    <View>
      <View style={styles.containerScann}>
        {ShowHideScanner && hasPermission === true ?
          <BarCodeScanner
            onBarCodeScanned={returnScanned ? undefined : handleBarCodeScanned}
            style={StyleSheet.absoluteFillObject}
          /> : <Text>Necesitamos acceso a tu camara, para escanear los productos</Text>}
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