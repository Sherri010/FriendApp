import { combineReducers } from 'redux';
import {BooksReducer} from './reducer_books';

const rootReducer = combineReducers({
  //piece of state:value from reducer
   books:BooksReducer
});

export default rootReducer;
