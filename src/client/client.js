import '@babel/polyfill';

import React from 'react';
import { hydrate } from 'react-dom';

import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import reducers from './reducers';
import Routes from '../Routes';

const INITIAL_STATE = window.INITIAL_STATE || {};

const store = createStore(reducers, INITIAL_STATE, applyMiddleware(thunk));

const ClientApp = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        {renderRoutes(Routes)}
      </BrowserRouter>
    </Provider>
  )
}

hydrate(
  <ClientApp />,
  document.getElementById('root')
);
