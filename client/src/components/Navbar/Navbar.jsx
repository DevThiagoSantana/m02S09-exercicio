import { Link, useNavigate } from 'react-router-dom';
import { useUserInfo, useSetUserInfo } from '../../hooks/useUserInfo';
import "./Navbar.css";

function Navbar() {
  const navigate = useNavigate();
  const setUserInfo = useSetUserInfo();
  const userInfo = useUserInfo();

  const handleNavigateLogin =()=>{
    navigate("/login");
  };

  const handleLogout= ()=>{
    setUserInfo();
    handleNavigateLogin();
  };

  return (
    <header className="navbarContainer">
      <Link to ="/" className="navbarLogoBox">
        <img src="/logo.png" alt="Logo" />
        <h1>DEVinCursos</h1>
      </Link>
      {userInfo?.name ? (
        <button onClick={handleLogout}>Sair</button>
      ) :(
        <button onClick={handleNavigateLogin}>Entrar</button>
      )};
    </header>
  );
}

export default Navbar;
