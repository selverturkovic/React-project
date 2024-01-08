import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#2196f3",
    },
    secondary: {
      main: "#ff4081",
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
    fontSize: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        containedPrimary: {
          border: "1px solid white",
          borderRadius: "30px",
          backgroundColor: "#1e68cb",
          color: "#ffffff",
          padding: "10px 20px",
          "&:hover": {
            backgroundColor: "#ffffff",
            color: "#1e68cb",
          },
        },
        containedSecondary: {
          borderRadius: "20px",
          backgroundColor: "rgb(10, 35, 68)",
          opacity: "0",

          transition: "opacity 0.3s ease",
          "&:hover": {
            opacity: "1",
            backgroundColor: "rgb(10, 35, 68)",
            color: "white",
          },
        },
      },
    },
  },
});

export default theme;
