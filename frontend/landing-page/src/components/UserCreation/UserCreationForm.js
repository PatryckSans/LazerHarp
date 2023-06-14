// UserCreationForm.js

import React, { useState } from "react";
import { createUser } from "../../Api/userApi";
import "./style.css";

const UserCreationForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const userData = {
        name,
        email,
        password,
      };

      const newUser = await createUser(userData);
      console.log("Novo usuário criado:", newUser);

      // Limpar os campos após a criação do usuário
      setName("");
      setEmail("");
      setPassword("");
    } catch (error) {
      console.error("Erro ao criar usuário:", error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} id="userCreate">
      <h2>Criar novo Usuário</h2>
      <div>
        <label htmlFor="name">Nome:</label>
        <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </div>
      <div>
        <label htmlFor="password">Senha:</label>
        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      </div>
      <button type="submit">Criar Usuário</button>
    </form>
  );
};

export default UserCreationForm;
