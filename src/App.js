import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';
import history from './history';
import { Home, ViewPost, AddPost } from './components/index';

class App extends Component {
  render() {
    return (
      <Router history={history}>
      <div>
        <Route exact path='/' component={Home} />
        <Route path='/add-post' component={AddPost} />
        <Route path='/view-post/:id' component={ViewPost} />
      </div>
      </Router>
    );
  }
}

export default App;
