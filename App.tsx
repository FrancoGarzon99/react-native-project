import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home/Home';
import ProductList from './screens/ProductsList/ProductList';
import Admin from './screens/Admin/Admin';
import BuyList from './screens/BuyList/BuyList';


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="inicio">
        <Stack.Screen name="Inicio" component={Home} />
        <Stack.Screen name="Lista de Productos" component={ProductList} />
        <Stack.Screen name="Admin" component={Admin} />
        <Stack.Screen name="Lista de Compra" component={BuyList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
