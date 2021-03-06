import React from 'react'
import { useState, useEffect, } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ArrowDropDownCircleSharpIcon from '@mui/icons-material/ArrowDropDownCircleSharp';
import { AppBar, IconButton, Toolbar, Collapse } from '@material-ui/core';
import SortIcon from '@material-ui/icons/Sort';

import { Link as Scroll } from 'react-scroll';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      fontFamily: 'Nunito',
    },
    appbar: {
      background: 'none',
    },
    appbarWrapper: {
      width: '80%',
      margin: '0 auto',
    },
    appbarTitle: {
      flexGrow: '2',
    },
    icon: {
      color: '#fff',
      fontSize: '2rem',
    },
    colorText: {
      color: '#5AFF3D',
    },
    container: {
      textAlign: 'center',
    },
    title: {
      color: '#fff',
      fontSize: '4.5rem',
    },
    goDown: {
      color: '#5AFF3D',
      fontSize: '4rem',
    },
  }));

const Header = () => {
    const classes = useStyles();
    const [checked, setChecked] = useState(false);
    useEffect(() => {
      setChecked(true);
    }, []);
  return (
    <div className={classes.root} id="header">
    

    <Collapse
      in={checked}
      {...(checked ? { timeout: 1000 } : {})}
      collapsedHeight={50}
    >
      <div className={classes.container}>
        <h1 className={classes.title}>
          Welcome to <br />
          Course<span className={classes.colorText}>Store.</span>
        </h1>
        <Scroll to="shop" smooth={true}>
          <IconButton>
            <ArrowDropDownCircleSharpIcon className={classes.goDown} />
          </IconButton>
        </Scroll>
      </div>
    </Collapse>
  </div>
  )
}

export default Header
