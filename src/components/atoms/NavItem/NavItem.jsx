
import { Link } from "react-router-dom";
import "./NavItem.css";

const NavItem = ({ to, children }) => {
  return (
    <Link to={to} className="nav-item">
      {children}
    </Link>
  );
};

export default NavItem;