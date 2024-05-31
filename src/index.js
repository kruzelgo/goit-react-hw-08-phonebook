import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './components/App/App';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './Redux/Store';
import './index.css';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
