import { createContext, useContext } from 'react';

export const themes = {
  red: {
    key: 'red',
    name: 'Deep Red',
    color: '#dc2626',
    colorLight: '#ef4444',
    textOnAccent: '#ffffff',
    path: '/red',
  },
  orange: {
    key: 'orange',
    name: 'Burnt Orange',
    color: '#ea580c',
    colorLight: '#f97316',
    textOnAccent: '#ffffff',
    path: '/orange',
  },
  blue: {
    key: 'blue',
    name: 'Electric Blue',
    color: '#2563eb',
    colorLight: '#3b82f6',
    textOnAccent: '#ffffff',
    path: '/blue',
  },
  purple: {
    key: 'purple',
    name: 'Deep Purple',
    color: '#7c3aed',
    colorLight: '#8b5cf6',
    textOnAccent: '#ffffff',
    path: '/purple',
  },
  teal: {
    key: 'teal',
    name: 'Teal',
    color: '#0d9488',
    colorLight: '#14b8a6',
    textOnAccent: '#ffffff',
    path: '/teal',
  },
};

export const ThemeContext = createContext(themes.red);

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ themeKey, children }) => {
  const theme = themes[themeKey] ?? themes.red;

  return (
    <ThemeContext.Provider value={theme}>
      <div
        className="theme-root"
        style={{
          '--accent': theme.color,
          '--accent-light': theme.colorLight,
          '--accent-text': theme.textOnAccent,
        }}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
};
