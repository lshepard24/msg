import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';

import postReducer from './reducers/post';
import resReducer from './reducers/response';

const reducer = combineReducers({
  posts: postReducer,
  responses: resReducer
});

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(
    thunkMiddleware,
    createLogger(),
  ))
);

export * from './reducers/post'; 
export * from './reducers/response';

export default store;