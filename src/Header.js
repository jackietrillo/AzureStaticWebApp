import NavBar from "./NavBar";

function Header() {
  return (
    <header className="header shadow-sm p-3 mb-5">
      <img src="images/logo.png" className="app-logo" />
      <NavBar />
    </header>
  );
}

export default Header;
