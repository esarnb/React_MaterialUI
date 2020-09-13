import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography} from '@material-ui/core';

const useStyles = makeStyles({
    root: {
      // maxWidth: 345,
      margin: "10px",
    },
    media: {
      height: 140,
    },
  });
  
  export default function(props) {
    const classes = useStyles();
    const {img, title, desc, b1, b2, hasPage} = props.info;

    return (
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={img ? img.link : "https://www.arpc.afrc.af.mil/desktopmodules/slideshow/templates/images/AFOverlay.png"}
            title={title ? img.title : "No Image Title."}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2"  className="center">
              {title ? title : "No Title"}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p"  className="center">
              {desc ? desc : "No Description"}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions  className="center">
          {b1 ? <Button size="small" color="primary" onClick={() => window.open(b1.link, "_blank")}> {b1.name} </Button> : null}
          {hasPage ? <Button size="small" color="primary" onClick={() => window.open(b2.link, "_blank")}> {b2.name} </Button> : null}
        </CardActions>
      </Card>
    );
}