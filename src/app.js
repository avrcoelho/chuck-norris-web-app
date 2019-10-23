
import './config/ReactotronConfig';
import React from 'react';
import { Provider } from 'react-redux';

import store from './store';

import GlobalStyles from './styles/GlobalStyles';
import Routes from './routes';

const App = () => (
  <Provider store={store}>
    <GlobalStyles />
    <Routes />
  </Provider>
);

export default App;
