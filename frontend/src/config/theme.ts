import { createTheme } from '@mui/material/styles';

// Base MUI theme aligned to existing Tailwind palette used in the app
export const theme = createTheme({
  palette: {
    primary: {
      main: '#2563EB', // tailwind blue-600
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#6B7280', // tailwind gray-500
      contrastText: '#ffffff',
    },
    success: {
      main: '#16A34A', // tailwind green-600
    },
    background: {
      default: '#F9FAFB', // tailwind gray-50
      paper: '#FFFFFF',
    },
    text: {
      primary: '#111827',
      secondary: '#4B5563',
    },
  },
  shape: {
    borderRadius: 8, // close to rounded-md
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 600,
          boxShadow: 'none',
        },
      },
    },
  },
});

export default theme;