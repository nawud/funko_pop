import NavItem from '../../atoms/NavItem/NavItem';
import './Navigation.css'
const Navigation = () => {
  return (
    <nav className="navigation">
      <NavItem href="/coleccion">Coleccion</NavItem>
      <NavItem href="/categorias">Categorías</NavItem>
      <NavItem href="/marcas">Marcas</NavItem>
    </nav>
  );
};

export default Navigation;