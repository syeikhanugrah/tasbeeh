import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from '../screens/MainScreen';
import SettingsScreen from '../screens/SettingsScreen';
import { IconButton } from 'react-native-paper';

const Stack = createStackNavigator();

const Navigation = ({ theme }) => (
  <NavigationContainer>
    <Stack.Navigator
      screenOptions={{
        headerTintColor: theme.colors.text,
        headerStyle: {
          backgroundColor: theme.colors.background,
        },
      }}>
      <Stack.Screen
        name="Main"
        component={MainScreen}
        options={({ navigation }) => ({
          headerTitle: 'Tasbih',
          headerRight: () => (
            <IconButton
              icon="settings"
              onPress={() => navigation.navigate('Settings')}
            />
          ),
        })}
      />
      <Stack.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          headerTitle: 'Pengaturan',
        }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default Navigation;
