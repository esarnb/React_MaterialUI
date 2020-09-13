import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import {AppBar, Toolbar, Typography, Button} from '@material-ui/core';

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

export default function Navbar() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static" color="inherit" id="NavAppbar">
        <Toolbar>

          <Link to="/"><Button color="inherit" className="navButton" /* onClick={() => props.changePage("Home")} */>Home</Button></Link>
          <Link to="/projects"><Button color="inherit" className="navButton" /* onClick={() => props.changePage("Projects")} */>Projects</Button></Link>
          <Link to="/future"><Button color="inherit" className="navButton" /* onClick={() => props.changePage("Future")} */>Future</Button></Link>
          <Link to="/about"><Button color="inherit" className="navButton" /* onClick={() => props.changePage("About")} */>About</Button></Link>
          
          <Typography variant="h6" className={`${classes.title} navTitle`} align="center" />
          
          {/* Control by state of account login */}

          {/* <Link to="/Chat"><Button color="inherit" className="navButton" >Chat</Button></Link> */}
          {/* <Link to="/Notes"><Button color="inherit" className="navButton" >Notes</Button></Link> */}
          {/* <Link to="/Settings"><Button color="inherit" className="navButton" >Settings</Button></Link> */}
          
          {/* Add setState for detecting login/logout */}
          <Link to={true ? "/login" : "/logout"}><Button color="inherit" className="navButton" /* onClick={() => props.changePage("About")} */> {true ? "Login" : "Logout"} </Button></Link>

        </Toolbar>
      </AppBar>
    </div>
  );
}
