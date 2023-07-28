import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div>
      <nav>
        <Link to="/Home"><button>Главная</button></Link>
        <Link to="/BatteryList"><button>Батареи</button></Link>
        <Link to="/VideoSendersList"><button>Видео сендеры</button></Link>
        <Link to="/CamerasList"><button>Камеры</button></Link>
        <Link to="/CabelsList"><button>Кабели</button></Link>
        <Link to="/MonitorsList"><button>Мониторы</button></Link>
        <Link to="/LightList"><button>Свет</button></Link>
        <Link to="/CellsList"><button>Клетки для камер</button></Link>
        <Link to="/OtherList"><button>Прочее</button></Link>
        <Link to="/StabilizationList"><button>Стабилизация</button></Link>
        <Link to="/BodyKitsList"><button>Обвесы</button></Link>
      </nav>
    </div>
  );
}