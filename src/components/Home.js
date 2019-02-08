import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { fetchPosts, fetchPost } from '../store/index';
import moment from 'moment';

import { Card } from 'react-bootstrap';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    }
  }

  async componentDidMount() {
    await this.props.fetchPosts();
  }
  
  render() {
    const { posts } = this.props;
    const post = posts.map((post, index) => {
      return (
      <Link to={`view-post/${post.id}`} key={index}>
      <Card className='post-container'>
        <Card id='post-header'>
          <div id='post-title'>{post.title}</div>
          <div id='post-username'><i>{post.username}</i>, {moment().startOf('hour').fromNow()}</div>
        </Card>
        <Card.Body id='post-body'>{post.body}</Card.Body>
      </Card>
      </Link>
      )
    });

    return (
      <div>
        <Card className='page-container'>
          <Card.Title className='page-header'><h1>Message Board</h1></Card.Title>

              <Card.Body className='page-body'>{ posts && posts.length > 0 ? post : 
                <Card.Text className='page-body'>
                  There aren't any posts right now... Click here to add one!
                </Card.Text> }
              </Card.Body>

            <Link id='post-link' to='/add-post'>
              <div id='post-link-text'>
                Add a post!
              </div>
            </Link>

        </Card>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  posts: state.posts
})

const mapDispatchToProps = dispatch => ({
  fetchPosts: () => {
    dispatch(fetchPosts());
  },
  fetchPost: id => {
    dispatch(fetchPost(id));
  }
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));