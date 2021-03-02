
import MarkerIcon from '../../assets/marker.png'
import MarkerIconSelected from '../../assets/marker-selected.png'
import './styles.css';

const Marker = () => {
  return (
    <div>
      <img src={MarkerIcon} />
      <img src="https://www.petlove.com.br/static/uploads/banner_image/image/4304/logo-petlove-push.png" alt="" className="img-marker" />
    </div>
  );
}

export default Marker;