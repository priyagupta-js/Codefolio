import "../../../src/index.css";
import "../Navbar/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar-container">
      <div className="nav-menuItems">
        <div className="nav-left">PRIYA</div>
        <div className="nav-right">
          <ul className="right-menuItems">
            <li className="menuItems">About</li>
            <li className="menuItems">Skills</li>
            <li className="menuItems">Projects</li>
          </ul>
          <button className="btn-primary" type="button">CONNECT</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
