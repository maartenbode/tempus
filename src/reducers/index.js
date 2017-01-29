import { combineReducers } from 'redux';
import timeEntry from './timeEntry';
import lastAction from './lastAction';

const rootReducer = combineReducers({
  timeEntry,
  lastAction,
});

export default rootReducer;
