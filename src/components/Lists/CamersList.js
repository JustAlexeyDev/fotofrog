// CSS
import './css/Product.css'

// Database
import Camera from './Products/Camera';
import CameraREDV from './Products/CameraREDV';

export default function CamerasList() {
  return (
    <div className='Product'> 
      <Camera />
      <CameraREDV />
    </div>
  );
}