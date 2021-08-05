import React from 'react'
import { View, StyleSheet, Text, Button, Alert } from 'react-native';

interface Props {
  activeStateSearch: () => void
  activeStateScanProduct: () => void
}

const MenuBar = ({ activeStateSearch, activeStateScanProduct }: Props) => {
  return (
    <View>
      <View style={styles.menubar}>
        <View style={styles.menuContent}>
          <Button title="Buscar Producto" onPress={activeStateScanProduct} />
          <Button title="Nuevo Producto" onPress={activeStateSearch} />
          <Button title="Lista de compra" onPress={activeStateSearch} />
          <Button title="Admin" onPress={activeStateSearch} />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  menubar: {
    marginTop: 20,
    width: "100%",
    height: 80
  },
  menuContent: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around"
  },
});
export default MenuBar
