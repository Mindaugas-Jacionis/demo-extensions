import React from 'react';
import { Provider } from 'react-redux';

import './index.scss';
import Counter from './pages/Counter';
import Store from './state';
import { PORT_NAME } from '../constants';

function App() {
  const store = new Store({
    portName: PORT_NAME,
  });

  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}

export default App;
