// src/components/Navbar.jsx
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { 
  AppBar, 
  Toolbar, 
  Container, 
  Typography, 
  Button, 
  IconButton,
  Switch,
  FormControlLabel,
  Box
} from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import ThemeContext from '../context/ThemeContext';

const Navbar = () => {
  const { isDark, toggleTheme } = useContext(ThemeContext);

  return (
    <AppBar 
      position="static" 
      color="default" 
      elevation={0} 
      sx={{ 
        borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
        bgcolor: 'background.default' // Используем цвет фона из темы
      }}
    >
      <Container maxWidth="lg">
        <Toolbar sx={{ flexWrap: 'wrap' }}>
          <Typography 
            variant="h6" 
            noWrap 
            sx={{ 
              flexGrow: 1,
              color: 'text.primary' // Используем цвет текста из темы
            }}
          >
            MyApp
          </Typography>
          
          <nav>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
              <Button 
                component={Link} 
                to="/" 
                sx={{ my: 1, mx: 1.5, color: 'text.primary' }}
              >
                Home
              </Button>
              <Button 
                component={Link} 
                to="/projects" 
                sx={{ my: 1, mx: 1.5, color: 'text.primary' }}
              >
                Projects
              </Button>
              <Button 
                component={Link} 
                to="/contact" 
                sx={{ my: 1, mx: 1.5, color: 'text.primary' }}
              >
                Contact
              </Button>
              <Button 
                component={Link} 
                to="/messages" 
                sx={{ my: 1, mx: 1.5, color: 'text.primary' }}
              >
                Messages
              </Button>
            </Box>
          </nav>
          
          
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;