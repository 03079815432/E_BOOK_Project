// MyStack.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../Screens/Login';
import Registration from '../Screens/Registration';
import DashboardScreen from '../Screens/DashboardScreen';
import ALogin from '../Screens/ALogin';

const Stack = createStackNavigator();

export function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
      <Stack.Screen name='Registration' component={Registration} options={{ headerShown: false }} />
      <Stack.Screen name='Dashboard' component={DashboardScreen} options={{ headerShown: false }} />
      <Stack.Screen name='ALogin' component={ALogin} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}
