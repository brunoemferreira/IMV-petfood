import './styles.css';

const Product = () => {
  return (
    <div className="product col-3">
      <img src="https://staticpetz.stoom.com.br/fotos/1574869059873.jpg"
        className="img-fluid align-center"
      />
      <button className="btn btn-info rounded-circle">+</button>
      <h4>
        <label className="badge badge-info">R$90.00</label>
      </h4>
      <small>
        <b>Ração Royal Canin Medium - Cães Adultos</b>
      </small>
    </div>
  );
}

export default Product;