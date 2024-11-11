import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./Navigation.css";

const NavItem = ({ to, children, onClick }) => (
  <NavLink to={to} className="nav-item" onClick={onClick}>
    {children}
  </NavLink>
);

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div 
        className={`menu-toggle ${isOpen ? 'active' : ''}`} 
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <nav className={`navigation ${isOpen ? 'active' : ''}`}>
        <NavItem to="/home" onClick={handleLinkClick}>Home</NavItem>
        <NavItem to="/categorias" onClick={handleLinkClick}>Categorías</NavItem>
        <NavItem to="/marcas" onClick={handleLinkClick}>Marcas</NavItem>
      </nav>
    </>
  );
};

export default Navigation;