import './App.scss';
import Route from './Routes/Route';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme/Theme';

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
