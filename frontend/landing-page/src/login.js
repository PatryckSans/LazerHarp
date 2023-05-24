import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./login.css"; // Importe o arquivo CSS para estilização

function Login() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user === "admin" && password === "admin123") {
      setLoggedIn(true);
      history.push(`/welcome/${user}`);
    } else {
      alert("Login inválido");
    }
  };

  return (
    <div className="login-container"> {/* Use a classe CSS para estilização */}
      {loggedIn ? (
        <h1>Bem-vindo, {user}!</h1>
      ) : (
        <div>
          <h1>Por favor, faça o login!</h1>
          <form onSubmit={handleSubmit}>
            <div className="input-container"> {/* Contêiner para os campos de usuário e senha */}
              <div className="input-group">
                <label htmlFor="username">Usuário:</label>
                <input
                  type="text"
                  id="username"
                  value={user}
                  onChange={(e) => setUser(e.target.value)}
                />
              </div>
              <div className="input-group">
                <label htmlFor="password">Senha:</label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <br/>
            <input type="submit" value="Login" className="login-button" /> {/* Adicione a classe CSS ao botão */}
          </form>
        </div>
      )}
    </div>
  );
}

export default Login;