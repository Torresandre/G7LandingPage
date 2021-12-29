import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import SortIcon from '@material-ui/icons/Sort';
import { makeStyles } from '@material-ui/core/styles';
import { Link as Scroll } from 'react-scroll';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        
        fontFamily: 'Nunito',
        
      },
   
      iconmenu: {
        color: '#0096BB',
        fontSize: '3rem',
      },
      menu:{
        background: 'none'
      }
}));

export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const classes = useStyles();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root} id="header">
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
      <SortIcon className={classes.iconmenu} />
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        className={classes.menu}
        
      >
        <Scroll to="place-to-visit" smooth={true}>
        <MenuItem onClick={handleClose}>Sobre</MenuItem>
        </Scroll>
      
        <MenuItem onClick={handleClose}>Portifólio</MenuItem>
        
        <Scroll to="contact" smooth={true}>
        <MenuItem onClick={handleClose}>Contato</MenuItem>
        </Scroll>
      </Menu>
    </div>
  );
}