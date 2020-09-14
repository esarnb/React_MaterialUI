import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import {AppBar, Toolbar, Typography, Button, Menu, MenuItem} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import Time from '../Time/Time';
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
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static" color="inherit" id="NavAppbar">
        <Toolbar>
        <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}> <MenuIcon /> </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}><Link to="/"><Button color="inherit" className="navButton">Home</Button></Link></MenuItem>
        </Menu>
        <Link to="/"><Button color="inherit" className="navButton">Home</Button></Link>
          <Link to="/projects"><Button color="inherit" className="navButton"> Projects </Button></Link>
          <Link to="/future"><Button color="inherit" className="navButton"> Future </Button></Link>
          <Link to="/about"><Button color="inherit" className="navButton"> About </Button></Link>
          
          <Typography variant="h6" className={`${classes.title} navTitle`} align="center" />
          <Time /> //ToDo: dynamic
          <Typography variant="h6" className={`${classes.title} navTitle`} align="center" />
          
          {/* Control by state of account login */}

          <Link to="/Chat"><Button color="inherit" className="navButton" >Chat</Button></Link>
          <Link to="/Notes"><Button color="inherit" className="navButton" >Notes</Button></Link>
          <Link to="/Settings"><Button color="inherit" className="navButton" >Settings</Button></Link>
          
          {/* Add setState for detecting login/logout */}
          <Link to={true ? "/login" : "/logout"}><Button color="inherit" className="navButton" /* onClick={() => props.changePage("About")} */> {true ? "Login" : "Logout"} </Button></Link>

        </Toolbar>
      </AppBar>
    </div>
  );
}
