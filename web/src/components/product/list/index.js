import './styles.css'

const Product = () => {
  return (
    <div className="col-12 product-list">
      <div className="row">
        <div className="col-3">
          <img src="https://www.petlove.com.br/images/products/222292/product/Ra%C3%A7%C3%A3o_Affinity_PetCare_GranPlus_Choice_Frango_e_Carne_para_C%C3%A3es_Adultos_3109089_15kg.jpg?1586271146" className="img-fluid" />
        </div>
        <div className="col-6">
          <h6>
            <label className="badge badge-info" >R$ 30,00</label>
          </h6>
          <small>
            <b>Ração Affinity PetCare GranPlus Choice Frango e Carne para Cães Adultos</b>
          </small>
        </div>
        <div className="col-3">
          <button className="btn btn-secondary rounded-circle"> -</button>
        </div>
      </div>
    </div>
  );
}

export default Product;


