import { createStore } from 'redux';
import { composeWithDevTools } from 'remote-redux-devtools';

import reducers from './reducers';

const middlewares =
  process.env.NODE_ENV === 'production' ? [] : composeWithDevTools();

const store = createStore(reducers, middlewares);

export default store;
