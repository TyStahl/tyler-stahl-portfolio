import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import '../App.css';

const navItems = ["About", "Skills", "Projects", "Contact"];

type AppDrawerProps = {
  items: string[];
};

export function AppDrawer({ items }: AppDrawerProps) {
  const [isOpen, setIsOpen] = useState(false);

  function onCustomClick() {
    setIsOpen(!isOpen);
  }

  const handleNavClick = (sectionId: string) => {
    setIsOpen(false);
    const element = document.getElementById(sectionId.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
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
            onClick={() => handleNavClick(item.toLowerCase())}
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
  onClick: () => void;
};

function MenuItems({ text, onClick }: MenuItemProps) {
  return (
    <h3 className="menu-items" onClick={onClick}>
      {text}
    </h3>
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