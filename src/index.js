import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'


import './index.css';
import App from './App';
import store from './config/store'
import ProductListItem from './features/product-listing/product-list-item';

const app = <Provider store={store}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
</Provider>


ReactDOM.render(app, document.getElementById('root'));
