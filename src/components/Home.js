import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card } from 'react-bootstrap';
import { withRouter, Link } from 'react-router-dom';
import { fetchPosts, fetchPost } from '../store/index';
import moment from 'moment';
import { profile } from '../images/anonymous-headshot.jpg';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    }
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.props.fetchPosts();
  }
  
  handleClick(event) {
    const { posts } = this.props;
    const post = posts.map(post => fetchPost(post.id));

    this.props.history.push(`/view-post/${post.id}`);
  }

  render() {
    const { posts } = this.props;

    const post = posts.map((post, index) => {
      return (
      <Card className='post-container' key={index}>
        <Card.Text id='post-header'>
          <div id='post-title'>{post.title}</div>
          <div id='post-username'><i>{post.username}</i>, {moment().startOf('hour').fromNow()}</div>
        </Card.Text>
        <Card.Body id='post-body'>{post.body}</Card.Body>
      </Card>)
    });


    return (
      <div>
        <Card className='page-container'>
          <Card.Title className='page-header'><h1>Message Board</h1></Card.Title>

              <Card.Body className='page-body'>{ posts.length > 0 ? post : 
                <Card.Text className='msg-header'>
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