// src/context/ThemeContext.js
import { createContext } from 'react';

const ThemeContext = createContext({
  isDark: false,
  toggleTheme: () => {}
});

export default ThemeContext;