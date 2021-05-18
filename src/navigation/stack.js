import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import ViewScreen from '../screens/ViewScreen';

const Stack = createStackNavigator();

export function Stacks() {
    return (
        <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: true }}>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="View" component={ViewScreen} />
        </Stack.Navigator>
    );
}