import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import '../App.css';

const navItems = ["Home", "About", "Skills", "Projects", "Contact"];

type AppDrawerProps = {
  items: string[];
};

export function AppDrawer({ items }: AppDrawerProps) {
  const [isOpen, setIsOpen] = useState(false);

  function onCustomClick() {
    setIsOpen(!isOpen);
  }

  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <FaBars className="menu-icon" onClick={() => setIsOpen(!isOpen)} />
      <div className={isOpen ? 'menu-drawer is-open' : 'menu-drawer'}>
        {isOpen && <h1 className="menu-heading">Menu</h1>}
        {isOpen && items.map((item) => (
          <MenuItems 
            text={item} 
            key={item} 
            path={item === "Home" ? "/" : `/${item.toLowerCase()}`}
            onClick={handleNavClick}
          />
        ))}
      </div>
      <div>
        <MenuModal isOpen={isOpen} onClick={onCustomClick} />
      </div>
    </div>
  );
}

type MenuItemProps = {
  text: string;
  path: string;
  onClick: () => void;
};

function MenuItems({ text, path, onClick }: MenuItemProps) {
  return (
    <Link to={path} className="menu-items" onClick={onClick}>
      <h3>{text}</h3>
    </Link>
  );
}

type MenuModalProps = {
  isOpen: boolean;
  onClick: () => void;
};

function MenuModal({ isOpen, onClick }: MenuModalProps) {
  return (
    <div
      onClick={() => onClick()}
      className={isOpen ? 'menu-shade is-drawn' : 'menu-shade'}></div>
  );
}

// Export the navItems for use in App.tsx
export { navItems };