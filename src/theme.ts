// src/theme.ts
"use client";
import { Roboto } from "next/font/google";
import { createTheme } from "@mui/material/styles";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1320,
      xl: 1536,
    },
  },
  palette: {
    primary: {
      main: "#a12c2b",
      light: "#666666",
    },
    info: {
      main: "#ffb800",
      contrastText: "#4c4c4c",
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
    h3: {
      fontWeight: 600,
      letterSpacing: 0.5,
      fontSize: "30px",
    },
    h5: {
      fontSize: "18px",
    },
  },
});

export default theme;
