import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import App from './App';
import store from './config/store'
import ProductListItem from './features/product-listing/product-list-item';

const App = <Provider store={store}>
  <BrowserRouter>
    <App />
    <Cart />
  </BrowserRouter>
</Provider>


ReactDOM.render(app, document.getElementById('root'));
