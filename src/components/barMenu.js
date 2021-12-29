/* eslint-disable no-unused-expressions */
/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, IconButton, Toolbar, } from '@material-ui/core';
import SimpleMenu from './Menu';
import G7Sublogo from '../assets/G7Sublogo.png';

const useStyles = makeStyles((theme) => ({
    appbar: {
        background: '#E2E2E2',
        fontsize: '3rem',
        height: '3rem',
        display: 'flex',
        flexGrow: '1',
        
        
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
      img: {
        height: '200px',
        width: '400px',
      }
}));


export default function BarMenu(){
    
    const classes = useStyles();

    return(
        <div className={classes.root}>
        <AppBar className={classes.appbar} elevation={0}>
        <Toolbar className={classes.appbarWrapper}>
          <img src={G7Sublogo} alt='G7' className={classes.img}/>
          <IconButton>
            <SimpleMenu />
            
          </IconButton>
        </Toolbar>
      </AppBar>
      </div>
    ); 

}

 
