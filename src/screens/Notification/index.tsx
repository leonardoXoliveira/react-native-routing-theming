import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Header } from '../../components/Header';

import { List } from './List';
import { Details } from './Details';

export type NotificationStackParamList = {
  List: undefined;
  Details: { title: string }
}

const Stack = createNativeStackNavigator<NotificationStackParamList>();

export function NotificationScreen() {
  return (
    <Stack.Navigator initialRouteName="List" screenOptions={{
      header: (props) => (
        <Header {...props} />
      ),
    }}>
      <Stack.Screen name="List" component={List} />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );
}
