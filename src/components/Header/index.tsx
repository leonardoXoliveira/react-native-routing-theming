import React, { useContext } from 'react';
import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import { useTheme, Appbar, Switch, Text } from 'react-native-paper';

import { PreferencesContext } from '../../contexts/PreferencesContext';

export function Header({ route, options, navigation }: NativeStackHeaderProps) {
  const theme = useTheme();
  const { toggleTheme, isDarkTheme } = useContext(PreferencesContext);

  return (
    <Appbar.Header
      theme={{
        colors: {
          primary: theme?.colors.background,
        },
      }}
    >
      {navigation.canGoBack() && <Appbar.BackAction onPress={() => navigation.goBack()} />}

      <Appbar.Content title={options.headerTitle || route.name} />

      <Text style={{ color: theme.colors.text }}>{isDarkTheme ? 'Dark' : 'Light'}</Text>
      <Switch
        value={isDarkTheme}
        onValueChange={toggleTheme}
      />
    </Appbar.Header>
  );
}
