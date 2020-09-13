import React, {Component} from 'react';
import Container from '@material-ui/core/Container';

import "./Home.css"

export default class Home extends Component {

    constructor() {
        super();
        this.state = {name: "Guest", section: "Visitor"};
    }

    render() {
        return (
            <Container id="HomeContainer">
                <div id="HomeDiv">     
                    <h2 className="center pageTitle">Welcome to the home page!</h2>
                    <p className="center">{this.state.name} | {this.state.section}</p>
                </div>
           </Container>
        )
    }
}