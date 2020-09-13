import React, {Component, Fragment} from 'react';
import Navbar from '../../components/Navbar/Navbar';
// import Footer from '../../components/Footer/Footer';

import Home from "../../pages/Home/Home";
import Projects from "../../pages/Projects/Projects";
import Future from "../../pages/Future/Future";
import About from "../../pages/About/About";
import NotFound from '../../components/NotFound/NotFound';

import "./standard.css"

export default class Layout extends Component {

    constructor() {
        super();
        this.state = {
            page: <Home />, title: "Home"
        };
    }

    updatePage = (newPage) => {
        let next = <NotFound />;

        switch(newPage) {
            case "Home": next = <Home />; break;
            case "Projects": next = <Projects />; break;
            case "Future": next = <Future />; break;
            case "About": next = <About />; break;
            default: next = <NotFound />;
        }

        this.setState({page: next, title: newPage})
    }

    render() {
        return (
            <Fragment>
                <Navbar changePage={this.updatePage} title={this.state.title}/>
                {this.state.page}
                {/* <Footer /> */}
            </Fragment>
        )
    }
}