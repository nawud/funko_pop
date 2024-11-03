import Logo from "../../atoms/Logo/Logo";
import Navigation from "../../atoms/Navigation/Navigation";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <Logo />
      <Navigation/>
    </header>
  );
}

export default Header;
