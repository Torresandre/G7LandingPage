import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, IconButton, Toolbar, Collapse } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link as Scroll } from 'react-scroll';
import SimpleMenu from './Menu';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    fontFamily: 'Nunito',
    clipPath: 'polygon(0% 0%, 100% 0, 100% 80%, 50% 100%, 0 80%)',
    background: '#E2E2E2',
    width: '100%',
    
    
   
  },
  rotate:{
    background: '#002336',
    display: 'flex',
    
    justifyContent: 'center',
    height: '100vh',

  },
  appbar: {
    background: 'none',
    fontsize: '3rem',
    height: '3rem',
    
    
  },
  appbarWrapper: {
    width: '80%',
    margin: '0 auto',
    
  },
  appbarTitle: {
    flexGrow: '1',
    fontsize: '3rem',
    color: '#002336',
  },
  icon: {
    color: '#0096BB',
    fontSize: '3rem',
  },
  colorText: {
    color: '#0096BB',
  },
  container: {
    textAlign: 'center',
        
   
  },
  title: {
     color: '#002336',
    fontSize: '2rem',
  },
  goDown: {
    color: '#0096BB',
    fontSize: '4rem',
  },
}));
export default function Header() {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  }, []);
  return (
    <div className={classes.rotate} >
    <div className={classes.root} id="header">
      
      <AppBar className={classes.appbar} elevation={0}>
        <Toolbar className={classes.appbarWrapper}>
          <h1 className={classes.appbarTitle}>
            G<span className={classes.colorText}>7</span>
          </h1>
          <IconButton>
            <SimpleMenu />
            
          </IconButton>
        </Toolbar>
      </AppBar>

      <Collapse
        in={checked}
        {...(checked ? { timeout: 1000 } : {})}
        collapsedHeight={50}
      >
       
        <div className={classes.container}>
          <h1 className={classes.title}>
          Unimos o design à estratégia!<br/>
Combinando suas visões com nossas criações. <br/>
<span className={classes.colorText}>Ampliando sua presença digital.</span>
          </h1>
          <Scroll to="place-to-visit" smooth={true}>
            <IconButton>
              <ExpandMoreIcon className={classes.goDown} />
            </IconButton>
          </Scroll>
        </div>
        
      </Collapse>
      </div>
    </div>
  );
}
