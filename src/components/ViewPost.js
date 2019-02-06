import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const ViewPost = props => {
  console.log('props', props);
  return (
    <div>
      Hello
      <Link to='/'>Back to Message Board</Link>
    </div>
  );
};

// class ViewPost extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {

//     }
//   }
//   componentDidMount() {

//   }
// }

export default ViewPost;