import { Link } from "react-router-dom";
import "../CSS/menu.css";

function Menu() {
  return (
    <>
      <div className="pos-f-t">
        <nav className="navbar navbar-light">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#menuContent"
            aria-controls="menuContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </nav>
        <div className="collapse menu" id="menuContent">
          <ul className="menu-items">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Skills">Skills</Link>
            </li>
            <li>
              <Link to="/About">About</Link>
            </li>
            <li>
              <Link to="/Contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Menu;
