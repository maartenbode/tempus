import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';
import reducers from './reducers';
import logger from 'redux-logger';

const store = createStore(reducers, {}, applyMiddleware(thunk, promiseMiddleware(), logger()));

export default store;