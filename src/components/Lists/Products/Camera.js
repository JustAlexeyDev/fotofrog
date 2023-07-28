import camera from '../../../assets/imgs/Camera.jpg'

import React, { useState } from 'react';
import ModalImage from 'react-modal-image';
import '../css/Modal.css'


export default function Camera() {
  var name = 'RED KOMODO-X 6K кинокамера (Canon RF, Черный цвет) ';
  var Price = '9 390 руб';
  var Articul = 'Артикул: 00398';
  var Creator = 'Производитель: RED';
  var size = 'Размеры:  129 x 101 x 95';
  var weight = 'Вес: 3 кг.';


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
          <ModalImage id='CameraImg'
            small={camera}
            large={camera}
            alt="RED KOMODO-X 6K кинокамера (Canon RF, Черный цвет) "
          />
        </div>
        
        <div id='ProductName'> RED KOMODO-X 6K кинокамера (Canon RF, Черный цвет) </div>
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