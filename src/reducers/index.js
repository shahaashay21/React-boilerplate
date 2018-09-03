import { combineReducers } from 'redux';

import Example from './reducer_example';
import ActiveExample from './reducer_active';

const rootReducer = combineReducers({
  // Just mapping with the reduers (book: BookReducer)
  example: Example,
  activeExample: ActiveExample
});

export default rootReducer;