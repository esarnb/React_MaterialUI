import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Layout from './layouts/standard/standard';
import Projects from './pages/Projects/Projects';
import NotFound from './components/NotFound/NotFound';
import './styles.css';

export default class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Layout}/>
            <Route exact path="/projects" component={Projects}/>
            <Route path="/" component={NotFound}/>
          </Switch>
      </BrowserRouter>
    );
  }
}
