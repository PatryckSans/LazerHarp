import React from "react";
import "./style.css";
import UserCreationForm from "../../components/UserCreation/UserCreationForm";
import UserLoginForm from "../../components/UserLogin/UserLoginForm";
function Contato() {
  return (
    <contato id="contact">
      <h1>Entre em contato com nossa equipe para saber mais!</h1>
      <div className="container">
        <div className="item">
          <UserCreationForm />
        </div>
        <div className="item">
          <UserLoginForm />
        </div>
      </div>
    </contato>
  );
}

export default Contato;
