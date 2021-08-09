import React from 'react';
import { View, StyleSheet, Text, Button, Alert } from 'react-native';

export type NavigationType = {
  navigation: {
    addListener: (arg: any) => void;
    canGoBack: (arg: any) => void;
    dispatch: (arg: any) => void;
    getParent: (arg: any) => void;
    getState: (arg: any) => void;
    goBack: (arg: any) => void;
    isFocused: (arg: any) => void;
    navigate: (arg: any) => void;
    pop: (arg: any) => void;
    popToTop: (arg: any) => void;
    push: (arg: any) => void;
    removeListener: (arg: any) => void;
    replace: (arg: any) => void;
    reset: (arg: any) => void;
    setOptions: (arg: any) => void;

  },
  router: {
    key: string;
    name: string;
    params: undefined | any;
  };
};

interface Props {
  activeStateSearch: () => void;
  activeStateScanProduct: () => void;
  propsNavigation: NavigationType;
}

const MenuBar = ({ activeStateSearch, activeStateScanProduct, propsNavigation }: Props) => {
  return (
    <View>
      <View style={styles.menubar}>
        <View style={styles.menuContent}>
          <Button title="Search" onPress={() => propsNavigation.navigation.navigate('Buscar Productos')} />
          <Button title="New" onPress={() => propsNavigation.navigation.navigate('Nuevo Producto')} />
          <Button title="Products" onPress={() => propsNavigation.navigation.navigate('Lista de Productos')} />
          <Button title="Admin" onPress={() => propsNavigation.navigation.navigate('Admin')} />
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
