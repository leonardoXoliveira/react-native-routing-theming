import React, { createContext, useState, ReactNode } from 'react';

type PreferenceContextProps = {
  isDarkTheme: boolean;
  toggleTheme: () => void;
}

type PreferencesProviderProps = {
  children: ReactNode
}

export const PreferencesContext = createContext<PreferenceContextProps>({} as PreferenceContextProps);

export function PreferencesProvider({ children }: PreferencesProviderProps) {
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(false);

  function toggleTheme() {
    setIsDarkTheme(!isDarkTheme);
  }

  return (
    <PreferencesContext.Provider value={{ isDarkTheme, toggleTheme }}>
      {children}
    </PreferencesContext.Provider>
  );
}
