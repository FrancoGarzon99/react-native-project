import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MenuBar from '../MenuBar/MenuBar';

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <View style={stylesLayout.container}>
      {children}
      <View style={stylesLayout.MenuBarPosition}>
        <View style={stylesLayout.MenuContainer}>
          <MenuBar activeStateScanProduct={() => { }} activeStateSearch={() => { }} />
        </View>
      </View>
    </View>
  );
};
const stylesLayout = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
  MenuBarPosition: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  MenuContainer: {
    width: "100%",
  }
});

export default Layout;
