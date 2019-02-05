import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPost } from '../store/index';
import { Card, Form, ButtonToolbar, Button } from 'react-bootstrap';

class AddPostForm extends Component {
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
  
  handleInput(event) {
    const { target: { name, value } } = event;
    this.setState({ [name]: value });
  }
  
  handleSubmit(event) {
    const { username, title, body } = this.state;

    event.preventDefault();
    this.props.createPost(username, title, body);
  
    this.setState({ username: '', title: '', body: '' });
  }

  render() {
    return (
      <Card>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Control
              name='username'
              type='text'
              placeholder='username'
              onChange={this.handleInput}
            />
          </Form.Group>

          <Form.Group>
            <Form.Control
              name='title'
              type='text'
              placeholder='title'
              onChange={this.handleInput}
            />
          </Form.Group>

          <Form.Group>
            <Form.Control
              name='body'
              type='text'
              placeholder='body'
              onChange={this.handleInput}
            />
          </Form.Group>

          <ButtonToolbar>
          <Link to='/'>
          <Button type='button'>
            Cancel
          </Button>
          </Link>
      
          <Button type='submit'>
            Add Post
          </Button>
          </ButtonToolbar>

        </Form>

      </Card>
    )
  }
}

export default withRouter(connect(null, { createPost })( AddPostForm ));