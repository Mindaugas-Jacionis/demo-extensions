import { createStore } from 'redux';
import { composeWithDevTools } from 'remote-redux-devtools';

import getMiddlewares from './getMiddlewares';
import reducers from './reducers';
import wrapStore from './wrapStore';
import { PORT_NAME } from '../../constants';

const middlewares =
  process.env.NODE_ENV === 'production'
    ? getMiddlewares
    : composeWithDevTools(getMiddlewares);

const store = createStore(reducers, middlewares);

export default () => wrapStore({ store, portName: PORT_NAME });
