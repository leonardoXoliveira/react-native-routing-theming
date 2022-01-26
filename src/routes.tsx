import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Provider as PaperProvider } from 'react-native-paper';

import { PreferencesContext } from './contexts/PreferencesContext';

import { HomeScreen } from './screens/Home';
import { NotificationScreen } from './screens/Notification';
import { ProfileScreen } from './screens/Profile';

import { defaultTheme, darkTheme } from './theme';

type TabParamList = {
  Home: undefined;
  Notification: undefined;
  Profile: undefined;
}

const Tab = createMaterialBottomTabNavigator<TabParamList>();

export function Routes() {
  const { isDarkTheme } = useContext(PreferencesContext);

  return (
    <PaperProvider theme={isDarkTheme ? darkTheme : defaultTheme} >
      <NavigationContainer>
        <Tab.Navigator initialRouteName="Home">
          <Tab.Screen name="Home" component={HomeScreen} options={{ tabBarIcon: 'home' }} />
          <Tab.Screen name="Notification" component={NotificationScreen} options={{ tabBarIcon: 'bell-outline' }} />
          <Tab.Screen name="Profile" component={ProfileScreen} options={{ tabBarIcon: 'account' }} />
        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
