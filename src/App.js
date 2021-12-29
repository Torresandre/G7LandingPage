/* eslint-disable react/jsx-no-undef */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import Header from './components/Header';
import PlaceToVisit from './components/PlaceToVisit';
import Contact from './components/contact';
import BarMenu from './components/barMenu';


const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%', 
    height: '400px',
   
    
    
  }
    
}));

export default function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <BarMenu/>
      <CssBaseline />
      <Header />
      <PlaceToVisit />
      <Contact/>
    </div>
  );
}
