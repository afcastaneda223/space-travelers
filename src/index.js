/* eslint-disable no-unused-vars */
import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import bootstrap from 'bootstrap';
import { Provider } from 'react-redux';
import App from './App';
import './styles/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import store from './redux/configureStore';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
