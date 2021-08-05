import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { View, Text } from 'react-native';

interface Props {

}

const App = (props: Props) => {
  return (
    <View>
      <StatusBar style="auto" />
      <Text>APP TSX</Text>
    </View>
  )
}

export default App
