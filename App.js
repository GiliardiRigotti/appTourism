import 'react-native-gesture-handler';
import * as React from 'react';
import { View } from 'react-native';
import { Stacks } from './src/navigation/stack';
import { NavigationContainer } from '@react-navigation/native';



export default function App() {
  return (
    <NavigationContainer>
      <Stacks />
    </NavigationContainer>
  );
};