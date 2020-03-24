import React from 'react';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from '../screens/MainScreen';

const theme = {
  ...DarkTheme,
};

const Stack = createStackNavigator();

const Navigator = () => (
  <NavigationContainer>
    <Stack.Navigator
      screenOptions={{
        headerTintColor: theme.colors.text,
        headerStyle: {
          backgroundColor: theme.colors.background,
        },
      }}>
      <Stack.Screen name="Home" component={MainScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default Navigator;
