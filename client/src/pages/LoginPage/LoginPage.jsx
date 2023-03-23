import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSetUserInfo } from "../../hooks/useUserInfo";
import { apiService } from "../../services/api";
import "./LoginPage.css";

function LoginPage(){
  const navigate = useNavigate();
  const setUserInfo =useSetUserInfo();

  const [username,setUsername] = useState("");
  const [password , setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleLoginAction = async ()=>{
    setError(null);
    const response =await apiService.get(`/users?username=${username}&password=${password}`);
    if(response?.data?.length){
      const{username , isAdmin} = response.data[0];
      setUserInfo({
        name: username,
        isAdmin,
      });
      navigate("/");
    } else{
      setUserInfo();
      setError("Credencial Invalida!");
    }
  };
  return(
    <div className="loginPageContainer">
      <h2>Login</h2>
      <input 
        type="text" 
        value={username} 
        onChange={(event) => setUsername(event.target.value)}
        placeholder ="Usuário"  
      />
      <input 
        type="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)} 
        placeholder ="Senha"
      />
      {error && <p style={{color:"red"}}>{error}</p> }
      <button onClick={handleLoginAction}>Entrar</button>
    </div>
  );
};

export default LoginPage;