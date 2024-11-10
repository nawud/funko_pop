import { NavLink } from "react-router-dom";
import "./Navigation.css";

const NavItem = ({ to, children }) => (
  <NavLink to={to} className="nav-item">
    {children}
  </NavLink>
);

const Navigation = () => {
  return (
    <nav className="navigation">
      <NavItem to="/home">Home</NavItem>
      <NavItem to="/categorias">Categorías</NavItem>
      <NavItem to="/marcas">Marcas</NavItem>
    </nav>
  );
};

export default Navigation;
