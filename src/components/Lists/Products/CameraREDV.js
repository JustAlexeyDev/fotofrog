import camera from '../../../assets/imgs/CameraREDV.jpg'

import React, { useState } from 'react';

import '../css/Modal.css'


export default function CameraREDV() {
  var name = 'зарядка для V-Mount на 2 поста KingMa BP-2CH ';
  var Price = '9 390 руб';
  var Articul = 'Артикул: 00111';
  var Creator = 'Производитель: Kingma';
  var size = 'Размеры: 265 x 210 x 125';
  var weight = '1.3 кг.';
  
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
          <img id='CameraImg' width={200} src={camera} alt='photo'/>
        </div>
        
        <div id='ProductName'>Камера RED V-Raptor XL 8K VV </div>
        <div id='Price'>100.000$</div>
        <button id='Buy'>Под заказ</button>

        <div>
          <button onClick={openModal}>Больше информации..</button>
          {isOpen && (
            <div className="modal-overlay">
              <div className="modal">
                <h2> Камера RED V-Raptor XL 8K VV </h2>
                <div className='info-product-modal'>
                  <p id='articul'>Артикул: 00397</p>
                  <p id='creator'>Производитель: RED</p>
                  <p id='size'>Размеры:  393 x 292 x 279</p>
                  <p id='weight'>Вес:  7 кг</p>
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