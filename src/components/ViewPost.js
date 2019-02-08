import React from 'react';
import { Link } from 'react-router-dom';

const ViewPost = ({fetchPost}) => {
  console.log('props', fetchPost);
  return (
    <div>
      Hello
      <Link to='/'>Back to Message Board</Link>
    </div>
  );
};

export default ViewPost;