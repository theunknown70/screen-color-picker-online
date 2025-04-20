import { createTheme, PaletteMode } from '@mui/material';

export const getTheme = (mode: PaletteMode) =>
  createTheme({
    palette: {
      mode,
      // Customize palette colors further if needed
      primary: {
        main: mode === 'light' ? '#1976d2' : '#90caf9', // Example primary color
      },
      secondary: {
        main: mode === 'light' ? '#dc004e' : '#f48fb1', // Example secondary color
      },
      background: {
        default: mode === 'light' ? '#f4f6f8' : '#121212',
        paper: mode === 'light' ? '#ffffff' : '#1d1d1d',
      },
      text: {
          primary: mode === 'light' ? '#000000' : '#ffffff',
          secondary: mode === 'light' ? '#555555' : '#cccccc',
      }
    },
    typography: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    },
    // Add other theme customizations like spacing, components overrides etc.
  });