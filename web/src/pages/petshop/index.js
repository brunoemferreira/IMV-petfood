import Header from '../../components/header';

const PetShop = () => {
  return (
    <div className="h-100">
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-2">
            <img src="https://www.petlove.com.br/static/uploads/banner_image/image/4304/logo-petlove-push.png" alt="" className="img-fluid" />
            <b>PetLove</b>
            <div className="petshop-infos">
              <span class="mdi mdi-star"></span>
              <text><b>2,8</b></text>
              <span class="mdi mdi-cash-usd-outline"></span>
              <text>$$$</text>
              <span class="mdi mdi-crosshairs-gps"></span>
              <text>$$$</text>
            </div>
          </div>
          <div className="col-10"></div>
        </div>
      </div>
    </div>
  );
}

export default PetShop;