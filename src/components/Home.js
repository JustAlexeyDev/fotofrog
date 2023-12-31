import './Home.css';

import CamerasList from './Lists/CamersList';
import BatteryList from './Lists/BatteryList'
export default function Home() {
  return (
    <main>
        {/* Hits */}
        <div className='HomeTitleHits'>
          <h2>Хиты продаж</h2>
          <button id='all-hits'>Все хиты</button>
        </div>
        <div id='hits'>
          <CamerasList/>
        </div>
        
        <div className='HomeTitleHits'>
          <h2>Новинки</h2>
          <button id='all-hits'>Все новинки</button>
        </div>
        <div id='hits'>
          <BatteryList />
        </div>
    </main>
  );
}
