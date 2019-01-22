import React from 'react';
import { Provider } from 'react-redux';

import './index.scss';
import Weather from './pages/Weather';
import Store from './state';
import { PORT_NAME } from '../constants';

function App() {
  const store = new Store({
    portName: PORT_NAME,
  });

  return (
    <Provider store={store}>
      <Weather />
    </Provider>
  );
}

export default App;
