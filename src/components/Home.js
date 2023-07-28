import './Home.css';

export default function Home() {
  return (
    <main>
        {/* Hits */}
        <div className='HomeTitleHits'>
          <h2>Хиты продаж</h2>
          <button id='all-hits'>Все хиты</button>
        </div>
        <div id='hits'>
          {/* HITS DISPLAY */}
        </div>
        
        <div className='HomeTitleHits'>
          <h2>Новинки</h2>
          <button id='all-hits'>Все новинки</button>
        </div>
        <div id='hits'>
          {/* NEWS DISPLAY */}
        </div>
    </main>
  );
}