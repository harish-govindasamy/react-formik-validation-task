import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      //   main: "#1976d2",
      main: "#0092ff",
    },
    secondary: {
      main: "#dc004e",
    },
  },
  typography: {
    h4: {
      fontWeight: 600,
    },
    h5: {
      fontWeight: 500,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          paddingTop: "2rem",
          paddingBottom: "2rem",
        },
      },
    },
  },
});

export default theme;
