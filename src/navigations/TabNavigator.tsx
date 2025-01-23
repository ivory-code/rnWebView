import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomePage from '../pages/HomePage';
import SettingPage from '../pages/SettingPage';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <SafeAreaProvider>
      <Tab.Navigator
        screenOptions={({}) => ({
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
          headerShown: false,
        })}>
        <Tab.Screen name="Home" component={HomePage} />
        <Tab.Screen name="Settings" component={SettingPage} />
      </Tab.Navigator>
    </SafeAreaProvider>
  );
}
