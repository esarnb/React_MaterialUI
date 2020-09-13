import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

// import Layout from './layouts/standard/standard';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Projects from './pages/Projects/Projects';
import Future from './pages/Future/Future';
import About from './pages/About/About';
import NotFound from './components/NotFound/NotFound';
import './styles.css';
import './App.css';

export default class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <BrowserRouter>
        <Navbar changePage={this.updatePage} title={this.state.title}/>

          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/projects" component={Projects}/>
            <Route exact path="/future" component={Future}/>
            <Route exact path="/about" component={About}/>
            <Route path="/" component={NotFound}/>
          </Switch>

      </BrowserRouter>
    );
  }
}
