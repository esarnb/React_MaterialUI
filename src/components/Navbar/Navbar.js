import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {AppBar, Toolbar, Typography, Button} from '@material-ui/core';
// import { red } from '@material-ui/core/colors';

import "./Navbar.css";
import "../../styles.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Navbar(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="inherit" id="NavAppbar">
        <Toolbar>
          {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>  */}
          <Button color="inherit" className="navButton" onClick={() => props.changePage("Home")}>Home</Button>
          <Button color="inherit" className="navButton" onClick={() => props.changePage("Projects")}>Projects</Button>
          <Typography variant="h6" className={`${classes.title} navTitle`} align="center"> {props.title} </Typography>
          
          <Button color="inherit" className="navButton" onClick={() => props.changePage("Future")}>Future</Button>
          <Button color="inherit" className="navButton" onClick={() => props.changePage("About")}>About</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}