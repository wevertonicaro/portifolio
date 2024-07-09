import { createTheme, responsiveFontSizes } from "@mui/material";

let theme = createTheme({
  palette: {
    primary: {
      main: '#E1E6FA'
    },
    secondary: {
      main: '#AEB5EF'
    }
  },
  typography: {
    fontFamily: 'Roboto'
  }
})

theme = responsiveFontSizes(theme);

export default theme;