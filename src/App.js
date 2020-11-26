import './App.scss';
import Route from './Routes/Route';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
const theme = createMuiTheme({
  
});
function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Route/>
      </div>
    </ThemeProvider>
  );
}

export default App;
