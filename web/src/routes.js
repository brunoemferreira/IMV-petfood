import { BrowserRouter as Router, Route } from 'react-router-dom';

import Cadastro from './pages/cadastro/index';
import Checkout from './pages/checkout/index';
import PetShop from './pages/petshop/index';
import Home from './pages/home/index';
import SideBar from './components/sidebar';


import './styles/global.css';

const Routes = () => {
  return (
    <>
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/petshop/:id" exact component={PetShop} />
        <Route path="/checkout" exact component={Checkout} />
        <Route path="/cadastro" exact component={Cadastro} />
      </Router>
      <SideBar />
    </>
  )
}

export default Routes;