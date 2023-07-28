// Import CSS
import './Sidemenu.css';
// Import Libs
import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
// Import icons
import burger from '../../assets/icons/btn-menu.svg'


const SideMenu = () => {  
  const [isOpen, setIsOpen] = useState(false);  
  const sideMenuRef = useRef(null);  
  const toggleMenu = (event) => {    
    event.stopPropagation();    
    setIsOpen(!isOpen);  };  
    useEffect(() => {    
      const handleClickOutside = (event) => {
        if (sideMenuRef.current && !sideMenuRef.current.contains(event.target)) {
          setIsOpen(false);
        }    
      };    
      document.addEventListener("click", handleClickOutside);
        return () => {
          document.removeEventListener("click", handleClickOutside);
        };  
      }, [

      ]);
        return (
          <div className="container">      
            <button id='toggleMenu' onClick={toggleMenu}><img width={50} src={burger} alt='burger' /></button> 
            <div ref={sideMenuRef} className={`side-menu ${isOpen ? "open" : ""}`}>        
              <ul>    
                {/* Menu */}
                <nav>
                  <li><Link to="/Home"><button>Главная</button></Link></li>          
                  <li><Link to="/BatteryList"><button>Аккумуляторы</button></Link></li>          
                  <li><Link to="/VideoSendersList"><button>Видео сендеры</button></Link></li> 
                  <li><Link to="/CamerasList"><button>Камеры</button></Link></li>   
                  <li><Link to="/CabelsList"><button>Кабели</button></Link></li>  
                  <li><Link to="/MonitorsList"><button>Мониторы</button></Link></li>  
                  <li><Link to="/LightList"><button>Свет</button></Link></li>  
                  <li><Link to="/CellsList"><button>Клетки для камер</button></Link></li>  
                  <li><Link to="/StabilizationList"><button>Стабилизация</button></Link></li>  
                  <li><Link to="/BodyKitsList"><button>Обвесы</button></Link></li>                   
                  <li><Link to="/OtherList"><button>Прочее</button></Link></li>  
                </nav>
              </ul>      
            </div>    
          </div>  );};
export default SideMenu;