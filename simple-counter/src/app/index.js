import React from 'react';
import { Provider } from 'react-redux';

import './index.scss';
import Counter from './pages/Counter';
import store from './state';

function App() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}

export default App;
