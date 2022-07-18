import Menu from "./Components/Menu";
import Quote from "./Components/Quote";

function Header() {
  return (
    <>
      <header className="header shadow-smn p-3">
        <div className="row">
          <div className="col-10">
            <div id="logo">
              <a href="/">
                <img src="images/logo.png" className="app-logo" />
              </a>
            </div>
            <Quote />
          </div>
          <div className="col-2" style={{ textAlign: "right", margin: "auto" }}>
            <Menu />
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
