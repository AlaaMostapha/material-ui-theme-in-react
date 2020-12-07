import "./App.scss";
import Base from "./pages/base/base";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme/Theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Base />
      </div>
    </ThemeProvider>
  );
}

export default App;
