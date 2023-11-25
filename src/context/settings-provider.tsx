import React, { useState, useContext } from 'react';

const SettingsContext = React.createContext({});

export function useTheme() {
  return useContext(SettingsContext);
}

export function SettingsProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState({
    theme: 'light',
  });

  const toggleTheme = () => {
    setState({
      ...state,
      theme: state.theme === 'light' ? 'dark' : 'light',
    });
  };

  return (
    <SettingsContext.Provider value={{ state, toggleTheme }}>
      {children}
    </SettingsContext.Provider>
  );
}

