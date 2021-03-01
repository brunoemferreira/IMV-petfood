import Logo from '../../assets/logo.png';
import LogoWhite from '../../assets/logo-white.png';

import './styles.css';

const Header = ({ whiteVersion }) => {
  const openDrawer = () => {
    const event = new CustomEvent('openCart');
    window.dispatchEvent(event);
  }

  return (
    <div className="col-12">
      <header className="py-4 px-4 text-center">
        <img src={whiteVersion ? LogoWhite : Logo} alt="Logotipo PerFood" className="img-fluid" />
      </header>
      <button onClick={() => openDrawer()} className="btn btn-info cart-button">
        <span className="mdi mdi-cart"></span> 2 Ítens
      </button>
    </div>
  )
}

export default Header;