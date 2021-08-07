import React from 'react';
import { View, StyleSheet, Text, Button, Alert } from 'react-native';

interface Props {
  activeStateSearch: () => void;
  activeStateScanProduct: () => void;
}

const MenuBar = ({ activeStateSearch, activeStateScanProduct }: Props) => {
  return (
    <View>
      <View style={styles.menubar}>
        <View style={styles.menuContent}>
          <Button title="Search" onPress={activeStateScanProduct} />
          <Button title="New" onPress={activeStateSearch} />
          <Button title="Products" onPress={activeStateSearch} />
          <Button title="Admin" onPress={activeStateSearch} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  menubar: {
    width: "100%",
    height: 50
  },
  menuContent: {
    flex: 1,
    backgroundColor: "red",
    flexDirection: "row",
    alignItems: "stretch",
    justifyContent: "space-evenly"
  },
});
export default MenuBar;
