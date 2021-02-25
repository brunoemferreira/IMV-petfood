import React from 'react';
import ReactDOM from 'react-dom';

import Cadastro from './pages/cadastro/index';
import Checkout from './pages/checkout/index';

import './styles/global.css';

ReactDOM.render(
  <React.StrictMode>
    <Checkout />
  </React.StrictMode>,
  document.getElementById('root')
);
