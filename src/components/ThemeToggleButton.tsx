import React from 'react';
import { IconButton, useTheme } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4'; // Moon icon (dark)
import Brightness7Icon from '@mui/icons-material/Brightness7'; // Sun icon (light)
import { useThemeContext } from '../contexts/ThemeContext';

const ThemeToggleButton: React.FC = () => {
  const theme = useTheme();
  const { toggleTheme } = useThemeContext();

  return (
    <IconButton sx={{ ml: 1 }} onClick={toggleTheme} color="primary">
      {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
    </IconButton>
  );
};

export default ThemeToggleButton;