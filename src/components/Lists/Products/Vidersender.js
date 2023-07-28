import photo from '../../../assets/imgs//5153_big.jpg'

import React, { useState } from 'react';

import '../css/Modal.css'


export default function VideoSender() {
  var name = 'Камера RED V-Raptor XL 8K VV';
  var Price = '70 900 руб.';
  var Articul = 'Артикул: 00113';
  var Creator = 'Производитель: Hollyland';
  var size = 'Размеры: 294 x 274 x 139';
  var weight = ' Вес: 2кг.';

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
          <img id='CameraImg' width={200} src={photo} alt='photo'/>
        </div>
        
        <div id='ProductName'>{name}</div>
        <div id='Price'>{Price}</div>
        <button id='Buy'>Под заказ</button>

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