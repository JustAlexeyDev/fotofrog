import BAtteryimg from '../../../assets/imgs/5393_big.jpg'

import React, { useState } from 'react';
import ModalImage from 'react-modal-image';
import '../css/Modal.css'


export default function Battery() {
  var name = 'Зарядка для V-Mount на 2 поста KingMa BP-2CH ';
  var Price = '9 390 руб';
  var Articul = 'Артикул: 00111';
  var Creator = 'Производитель: Kingma';
  var size = 'Размеры: 265 x 210 x 125';
  var weight = 'Вес: 1.3 кг.';

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
            small={BAtteryimg}
            large={BAtteryimg}
            alt="Зарядка для V-Mount на 2 поста KingMa BP-2CH "
          />
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