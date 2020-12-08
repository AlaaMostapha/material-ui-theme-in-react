import { createMuiTheme } from "@material-ui/core/styles";
// import purple from "@material-ui/core/colors/purple";
import red from "@material-ui/core/colors/red";
const theme = createMuiTheme({
  palette: {
    primary: {
      main: red[100],
      light: red[100],
    },
    secondary: {
      main: "#b958d4",
    },
    typography: {
      fontWeightLight: 400,
      fontWeightBold: 800,
      h1: {
        fontSize: "8rem",
      },
    },
  },
});
export default theme;
