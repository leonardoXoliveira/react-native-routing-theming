import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { PreferencesProvider } from './contexts/PreferencesContext';

import { Routes } from './routes';

function App() {
  return (
    <PreferencesProvider>
      <SafeAreaProvider>
        <Routes />
      </SafeAreaProvider>
    </PreferencesProvider>
  );
}

export default App;
