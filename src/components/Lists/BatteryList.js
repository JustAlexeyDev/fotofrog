// CSS
import './css/Product.css'

// Database
import Battery from './Products/Battery';


export default function BatteryList() {
  return (
    <div className='Product'> 
      <Battery />
    </div>
  );
}