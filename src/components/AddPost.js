import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPost } from '../store/index';

import { Card, Form, ButtonToolbar, Button } from 'react-bootstrap';

class AddPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      title: '',
      body: ''
    }
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(e) {
    const { target: { name, value } } = e;
    this.setState({ [name]: value });
  }
  
  handleSubmit(e) {
    const { username, title, body } = this.state;
    const name = username.length < 1 ? 'Anonymous' : username;

    e.preventDefault();
    this.props.createPost(name, title, body);
    this.setState({ name, title, body });
  }

  render() {

    return (
      <Card className='page-container'>
      <Card.Title className='page-header'><h1>Add a Post!</h1>

        <Form className='form-container' onSubmit={this.handleSubmit} >
          <Form.Group>
            <Form.Control
              name='username'
              type='text'
              placeholder='Username'
              onChange={this.handleInput}
            />
          </Form.Group>

          <Form.Group>
            <Form.Control
              name='title'
              type='text'
              required
              placeholder='Title'
              onChange={this.handleInput}
            />
          </Form.Group>

          <Form.Group>
            <Form.Control
              name='body'
              type='text'
              required
              placeholder="What's on your mind?"
              onChange={this.handleInput}
            />
          </Form.Group>

          <ButtonToolbar>
          <Link to='/'>
          <Button type='button'>Cancel</Button>
          </Link>
          <Button type='submit'>Add Post</Button>
          </ButtonToolbar>

        </Form>
        </Card.Title>
      </Card>
    )
  }
}

const mapStateToProps = state => ({
  posts: state.posts
});

const mapDispatchToProps = dispatch => ({
  createPost: (id, username, title, body) => {
    dispatch(createPost(id, username, title, body));
  }
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AddPost));