/**
 * React Native BottomView
 * @author Shivani Sisodiya
 * @version 1.0
 * @since 26 June 2022
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TaskDetail from '../src/screens/TaskDetail';
import BottomNavigation from './BottomNavigation';
import LoginScreen from '../src/screens/LoginScreen';

const Stack = createNativeStackNavigator();

export default function navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
          name="BottomNavigation"
          options={{
            headerShown: false,
          }}
          component={BottomNavigation}
        />
    
        <Stack.Screen
          name="LoginScreen"
          options={{
            headerShown: false,
          }}
          component={LoginScreen}
        />
        <Stack.Screen
          name="TaskDetail"
          options={{
            headerShown: false,
          }}
          component={TaskDetail}
        />

      </Stack.Navigator>

    </NavigationContainer>
  );
}
