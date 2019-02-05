import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { fetchPosts } from '../store/index';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    console.log('state props', this.props);
  }

  render() {
    let posts = this.props.posts;
    let post = posts.map((post, id) => (<div key={post.id}>{post.username}</div>));
    return(
      <div>
        <Card>
          <Card.Title>
          Message Board
          </Card.Title>
          <Card.Body>
            {
              posts.length > 0 ? post : <div>There don't seem to be any posts</div> 
            }
          </Card.Body>
        </Card>
        <Link to='/add-post'>Add a post!</Link>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  posts: state.posts
})

const mapDispatchToProps = dispatch => ({
  fetchPosts: () => {
    dispatch(fetchPosts());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);