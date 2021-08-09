import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home/Home';
import ProductList from './screens/ProductsList/ProductList';
import Admin from './screens/Admin/Admin';
import NewProduct from './screens/NewProduct/NewProduct';
import ProductSearch from './screens/ProductSearch/ProductSearch';
import { NativeBaseProvider } from 'native-base';


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="inicio">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Lista de Productos" component={ProductList} />
          <Stack.Screen name="Admin" component={Admin} />
          <Stack.Screen name="Nuevo Producto" component={NewProduct} />
          <Stack.Screen name="Buscar Productos" component={ProductSearch} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default App;
