import React from 'react';
import ReactDOM from 'react-dom';

import Cadastro from './pages/cadastro/index';
import Checkout from './pages/checkout/index';
import PetShop from './pages/petshop/index';

import './styles/global.css';

ReactDOM.render(
  <React.StrictMode>
    <PetShop />
  </React.StrictMode>,
  document.getElementById('root')
);
