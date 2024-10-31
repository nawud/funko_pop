import Logo from '../../atoms/Logo/Logo';
import Navigation from '../../molecules/Navigation/Navigation';

const Header = () => {
  return (
    <header className="header">
      <Logo />
      <Navigation />
    </header>
  );
};

export default Header;