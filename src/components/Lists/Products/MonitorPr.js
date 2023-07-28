import Monitor from '../../../assets/imgs/5108_middle.png'

import React, { useState } from 'react';


export default function MonitorPr() {
  var name = 'Камера RED V-Raptor XL 8K VV';
  var Price = '12 990 руб.';
  var Articul = 'Артикул: 00061';
  var Creator = 'Производитель: Feelworld';
  var size = 'Размеры: 148 x 93 x 20';
  var weight = ' Вес: 0.235 кг.';

  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
    document.body.style.overflow = 'hidden'; // Запрет прокрутки фона за модальным окном
  };

  const closeModal = () => {
    setIsOpen(false);
    document.body.style.overflow = 'auto'; // Возобновление прокрутки фона
  };
  return (
    <div>
      <div className='Product-container'>
        <div >
          <img id='CameraImg' width={200} src={Monitor} alt='Monitor'/>
        </div>
        
        <div id='ProductName'>{name}</div>
        <div id='Price'>{Price}</div>
        <button id='Buy'>Купить</button>

        <div>
          <button onClick={openModal}>Больше информации..</button>
          {isOpen && (
            <div className="modal-overlay">
              <div className="modal">
                <h2>{name}</h2>
                <div className='info-product-modal'>
                  <p id='articul'>{Articul}</p>
                  <p id='creator'>{Creator}</p>
                  <p id='size'>{size}</p>
                  <p id='weight'>{weight}</p>
                </div>
                <button onClick={closeModal}>Закрыть</button>
              </div>
            </div>
          )}
        </div>          
      </div>    

  
    </div>
  );
}