import axios from 'axios';
import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { store } from './redux/store';

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;
// axios.defaults.withCredentials = true;

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
  <Provider store={store}>
      <App />
  </Provider>
  </BrowserRouter>,
);
