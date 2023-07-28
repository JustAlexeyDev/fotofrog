// Import CSS
import './Header.css';

// Import components
import SideMenu from './SideMenu';

export default function Header() {
  return (
    <header>
      <div>
        <SideMenu />
      </div>
    </header>
  );
}