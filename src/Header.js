import logo from "./images/logo.png";
import NavBar from "./NavBar";

function Header() {
  return (
    <header className="header shadow-sm p-3 mb-5">
      <img src={logo} className="app-logo" />
      <NavBar />
    </header>
  );
}

export default Header;
