import Menu from "./Components/Menu";
import Quote from "./Components/Quote";

function Header() {
  return (
    <header className="header shadow-sm p-3 mb-5">
      <a href="/">
        <img src="images/logo.png" className="app-logo" />
      </a>
      <Quote />
      <Menu />
    </header>
  );
}

export default Header;
