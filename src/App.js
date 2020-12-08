import "./App.scss";
import Base from "./pages/base/base";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme/Theme";
import Routes from "./Routes/Route";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Routes />
      </div>
    </ThemeProvider>
  );
}

export default App;
