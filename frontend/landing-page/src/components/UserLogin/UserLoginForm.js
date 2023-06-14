import React, { useState } from "react";
import { loginUser } from "../../Api/userApi";
import "./style.css";

const UserLoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const credentials = {
        email,
        password,
      };

      const user = await loginUser(credentials);
      console.log("Usuário logado:", user);

      // Limpar os campos após o login do usuário
      setEmail("");
      setPassword("");
    } catch (error) {
      console.error("Erro ao fazer login:", error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} id="userLogin">
      <h2>Login do Usuário</h2>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </div>
      <div>
        <label htmlFor="password">Senha:</label>
        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      </div>
      <button type="submit">Fazer Login</button>
    </form>
  );
};

export default UserLoginForm;
