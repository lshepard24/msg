import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';
import history from './history';
import { Home, ViewPost, AddPostForm } from './components/index';

class App extends Component {
  render() {
    return (
      <Router history={history}>
      <div>
        <Route exact path='/' component={Home} />
        <Route path='/add-post' component={AddPostForm} />
        <Route path='/view-post' component={ViewPost} />
      </div>
      </Router>
    );
  }
}

export default App;
