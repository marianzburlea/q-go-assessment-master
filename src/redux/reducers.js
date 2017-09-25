import { combineReducers } from 'redux';
import reducer, {showOnlyReducer} from '../logic/reducer';

export default function createReducer() {
  return combineReducers({
    todos: reducer,
    showOnly: showOnlyReducer
  });
}
