import { createTheme } from "@material-ui/core/styles";

export type themeType = {
  palette: {
    primary: {
      main: string;
    };
    secondary: {
      main: string;
    };
  };
};

export const theme: themeType = createTheme({
  palette: {
    primary: {
      main: "#feff04",
    },
    secondary: {
      main: "#4d4d4d",
    },
  },
});
