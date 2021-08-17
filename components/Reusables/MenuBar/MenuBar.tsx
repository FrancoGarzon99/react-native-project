import { Divider, IconButton, Image } from 'native-base';
import React from 'react';
import { View, StyleSheet, Button } from 'react-native';

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

interface MenuBarProps {
  activeStateSearch: () => void;
  activeStateScanProduct: () => void;
  propsNavigation: NavigationType;
}


const MenuBar = ({ activeStateSearch, activeStateScanProduct, propsNavigation }: MenuBarProps) => {
  return (
    <View>
      <Divider />
      <View style={styles.menubar}>
        <View style={styles.menuContent}>
          <IconButton
            icon={<Image source={require("../../../assets/IconMenuBar/loupe.png")} h="40px" w="40px" alt="image base" />}
            onPress={() => propsNavigation.navigation.navigate('Buscar Productos')}
          />

          <IconButton
            icon={<Image source={require("../../../assets/IconMenuBar/add.png")} alt="image base" h="40px" w="40px" />
            }
            onPress={() => propsNavigation.navigation.navigate('Nuevo Producto')}
          />
          <IconButton
            icon={<Image source={require("../../../assets/IconMenuBar/clipboard.png")} alt="image base" h="40px" w="40px" />
            }
            onPress={() => propsNavigation.navigation.navigate('Lista de Productos')}
          />
          <IconButton
            icon={<Image source={require("../../../assets/IconMenuBar/settings.png")} h="40px" w="40px" alt="image base" />}
            onPress={() => propsNavigation.navigation.navigate('Admin')}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  menubar: {
    width: "100%",
    height: 80
  },
  menuContent: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly"
  },
});
export default MenuBar;
