import { Link } from 'react-router-dom';
import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbarContainer">
      <Link to ="/" className="navbarLogoBox">
        <img src="/logo.png" alt="Logo" />
        <h1>DEVinCursos</h1>
      </Link>
    </header>
  );
}

export default Navbar;
