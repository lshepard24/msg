import history from '../../history';

export const ADD_POST = 'ADD_POST';
export const GET_POSTS = 'GET_POSTS'
export const GET_POST = 'GET_POST';
export const SHOW_POSTS = 'SHOW_POSTS';

let nextId = 1;
export const createPost = ( username, title, body) => dispatch => {
  const action = { type: ADD_POST, id: nextId++, username, title, body };
  dispatch(action);
  history.push(`/`)
};

export const fetchPosts = () => dispatch => {
  const action = { type: GET_POSTS };
  dispatch(action);
}

export const fetchPost = id => dispatch => {
  const action = { type: GET_POST, id: id };
  dispatch(action);
  history.push(`/view-post/${id}`);
}

const postReducer = (state = [], action) => {
  let { id, username, title, body } = action;
  let newPost = { id, username, title, body };
  let posts = localStorage.getItem('posts');
  
  switch(action.type) {
    
    case ADD_POST:
      localStorage.setItem('posts', JSON.stringify([...state, newPost]));
      return [...state, newPost];
    
    case GET_POSTS: 
      return JSON.parse(posts);
    
    case GET_POST:
      return posts.filter(post => post.id === action.id);

    default:
      return state;
  }
};

export default postReducer;
