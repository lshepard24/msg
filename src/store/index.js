import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';

import postReducer from './post';

const reducer = combineReducers({
  posts: postReducer
});

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(
    thunkMiddleware,
    createLogger(),
  ))
);

export * from './post'; 

export default store;