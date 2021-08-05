import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, Alert } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import MenuBar from './components/MenuBar/MenuBar';

const ScannActiveComponent = () => {
  const [hasPermission, setHasPermission] = useState<null | boolean>(null);
  const [scanned, setScanned] = useState<boolean>(false);
  const [scannerActive, setScannerActive] = useState<boolean>(false);
  const [scanProductState, setScanProductState] = useState<string>("inactive");
  const [scanSearchState, setScanSearchState] = useState<string>("inactive");
  const [dataScanned, setDataScanned] = useState<{ type: string, data: string } | undefined>();

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }: any) => {
    setDataScanned({ type: type, data: data })
    setScannerActive(false)
  };

  // if (hasPermission === null) {
  //   return Alert.alert("Necesitamos que actives la camara para poder escanear/buscar los productos");
  // }
  // if (hasPermission === false) {
  //   return Alert.alert("Necesitamos los permisos de la camara para poder escanear/buscar los productos");
  // }

  const activeStateScanProduct = () => {
    setScannerActive(true)
    setScanProductState("active")
    setDataScanned({ type: "", data: "" })
  }
  const activeStateSearch = () => {
    setScannerActive(true)
    setScanSearchState("active")
    setDataScanned({ type: "", data: "" })
  }
  return (
    <View>
      <StatusBar />
      <MenuBar activeStateScanProduct={activeStateScanProduct} activeStateSearch={activeStateSearch} />
      <View style={styles.container}>

        {/* {scannerActive && <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={StyleSheet.absoluteFillObject}
        />} */}
        <StatusBar style="auto" />
        {scannerActive === true && <Button title="Cancelar" onPress={() => {
          setScannerActive(false)
          scanProductState === "active" && setScanProductState("inactive")
          scanSearchState === "active" && setScanSearchState("inactive")
        }} />}

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    padding: 20,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: 20
  }
});
export default ScannActiveComponent;