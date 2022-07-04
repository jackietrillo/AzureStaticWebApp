import logo from "./images/logo.png";
import NavBar from "./NavBar";

function Header() {
  return (
    <header>
      <img src={logo} className="app-logo" />
      <h1 style={{ color: "#ccc" }}>jackietrillo.com</h1>
      <NavBar />
    </header>
  );
}

export default Header;
