import React from 'react';
import ReactDOM from 'react-dom';

import Cadastro from './pages/cadastro/index';
import Checkout from './pages/checkout/index';
import PetShop from './pages/petshop/index';
import SideBar from './components/sidebar';

import './styles/global.css';

ReactDOM.render(
  <React.StrictMode>
    <SideBar />
    <PetShop />
  </React.StrictMode>,
  document.getElementById('root')
);
