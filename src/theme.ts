import { createTheme, responsiveFontSizes } from "@mui/material";

let theme = createTheme({
  palette: {
    primary: {
      main: '#232323'
    },
    secondary: {
      main: '#234b1e'
    }
  },
  typography: {
    fontFamily: [
      // '"Helvetica Neue"',
      // '-apple-system',
      // 'BlinkMacSystemFont',
      // '"Segoe UI"',
      'Roboto',
      // '"Helvetica Neue"',
      // 'Arial',
      // 'sans-serif',
      // '"Apple Color Emoji"',
      // '"Segoe UI Emoji"',
      // '"Segoe UI Symbol"',
    ].join(','),
    h6: {
      fontWeight: 700,
      color: '#234b1e',
      textTransform: 'uppercase',
      letterSpacing: '1px',
    },
  }
})

theme = responsiveFontSizes(theme);

export default theme;