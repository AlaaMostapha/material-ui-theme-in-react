import React from 'react'
import Show from '../../containers/show/Show'
import SideMenu from '../../containers/sideMenu/SideMenu';
import Header from '../../containers/header/Header';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex', 
  },
  content: {
    flexGrow: 1,
  },
  welcome:{
       padding: theme.spacing(4),
  }
}));
function Welcome() {
    // const [open, setOpen] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

    const classes = useStyles();
//   const theme = useTheme();
    return (
        <div className={classes.root}>
            <SideMenu onClick={handleDrawerToggle} open={mobileOpen}/>
            <div className={classes.content}>
                <Header onClick={handleDrawerToggle}/>
                <section>
                    <Container className={classes.welcome} >
                        <h1 style={{textAlign:'center'}}>Welcome</h1>
                        <Show  control='carousel' />
                    </Container>
                </section>
            </div>
        </div>
    )
}

export default Welcome
