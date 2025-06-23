// src/App.js
import React from 'react';
import { ThemeProvider as MuiThemeProvider, createTheme, CssBaseline } from '@mui/material';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <AppContent />
      </ThemeProvider>
    </BrowserRouter>
  );
}

// Выносим в отдельный компонент
function AppContent() {
  const { isDark } = useThemeContext();
  
  // Создаем тему прямо здесь
  const theme = createTheme({
    palette: {
      mode: isDark ? 'dark' : 'light',
    },
  });

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <div style={{ padding: 20 }}>
        <h1>Содержимое приложения</h1>
        <p>Текущая тема: {isDark ? 'Темная' : 'Светлая'}</p>
      </div>
    </MuiThemeProvider>
  );
}

// Добавляем хук отдельно
function useThemeContext() {
  return useContext(ThemeContext);
}

export default App;