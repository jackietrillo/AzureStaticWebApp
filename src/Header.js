import logo from "./images/logo.png";
import NavBar from "./NavBar";

function Header() {
  return (
    <header>
      <img src={logo} className="app-logo" />

      <NavBar />
    </header>
  );
}

export default Header;
