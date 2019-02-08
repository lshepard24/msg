import history from '../../history';

// action types
export const ADD_RESPONSE = 'ADD_RESPONSE';
export const GET_RESPONSES = 'GET_RESPONSES';

// action creators
export const createResponse = (username, body) => dispatch => {
  const postId = localStorage.getItem('posts');
  const action = { type: ADD_RESPONSE, id: postId, username, body };
  dispatch(action);
  history.push(`/view-post/${postId}`)
};

export const fetchResponses = () => dispatch => {
  const action = { type: GET_RESPONSES };
  dispatch(action);
};

// reducer 
const resReducer = (state = [], action) => {
  const { postId, username, body } = action;
  const newRes = { postId, username, body };
  const responses = localStorage.getItem('responses');

  switch(action.type) {

    case ADD_RESPONSE: 
      localStorage.setItem('responses', JSON.stringify([...state, newRes]));
      return [...state, newRes];

    case GET_RESPONSES:
      return JSON.parse(responses);

    default: 
      return state;
  }
};

export default resReducer;