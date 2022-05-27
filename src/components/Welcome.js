import React from 'react'
import Header from './Header';
import Whole from './Whole/Whole';
import { CssBaseline, makeStyles } from "@material-ui/core";
import Navigation from './Whole/Cart/NavigationBar/Navigation';


const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100vh',
        backgroundImage: `url(${process.env.PUBLIC_URL + '/Images/wallpapersden.com_minimalist-black-digital-blend_1920x1080.jpg'})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      },
}));


const Welcome = () => {
    const classes = useStyles();
  

  return (
    <div className={classes.root}>
      <CssBaseline/>
      <Navigation/>
      <Header/>
      <Whole/>

    </div>
  )
}

export default Welcome
