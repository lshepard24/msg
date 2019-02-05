import history from '../history';

export const ADD_POST = 'ADD_POST';
export const GET_POSTS = 'GET_POSTS'
export const GET_POST = 'GET_POST';
export const SHOW_POSTS = 'SHOW_POSTS';

export const createPost = (username, title, body) => dispatch => {
  const action = { type: ADD_POST, username, title, body };
  dispatch(action);
  history.push('/');
};

export const fetchPosts = () => dispatch => {
  const action = { type: GET_POSTS };
  dispatch(action);
}

// export const fetchPostById = id => dispatch => {
//   const action = { type: GET_POST, id };
//   dispatch(action);
// }

const postReducer = (state = [], action) => {
  let { username, title, body } = action;
  let newPost = { username, title, body };
  
  switch(action.type) {
    
    case ADD_POST:
      localStorage.setItem('posts', JSON.stringify([...state, newPost]));
      return [...state, newPost];
    
    case GET_POSTS: 
      let posts = JSON.parse(localStorage.getItem('posts'));
      return posts
    
    // case GET_POST:
    //   return {...state, posts: state.posts.filter(post => post.id === action.id)}

    default:
      return state;
  }
};

export default postReducer;
