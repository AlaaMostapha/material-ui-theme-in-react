import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#3f51b5',
      light:'#7986cb'
    },
    secondary: {
      main: '#03a9f4',
    },
  },
}); 
export default theme;