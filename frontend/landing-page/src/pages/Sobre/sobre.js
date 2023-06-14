import React from "react";
import "./style.css";
import lazer from "../../images/lazer.png";
function Sobre() {
  return (
    <about>
      <img src={lazer} alt="lazer" />
      <h1 id="about">Missão</h1>
      <p>
        A missão da nossa empresa é unir diversas áreas de conhecimento humano para fortalecer o ensino escolar através
        do desenvolvimentos de softwares e hardwares que incentivem a descoberta autônoma e prazerosa dos nossos
        usuários.
      </p>
      <h1>Visão</h1>
      <p>
        Ser reconhecido como a principal empresa que alia educação, arte e tecnologia do Brasil, ampliando e atendendo
        docentes e discentes das mais diversas regiões. Democratizando o ensino de tecnologia dentro do território
        nacional.
      </p>
      <h1>Valores</h1>
      <p>
        Fomentar os afetos entre nosso corpo funcional para que a pesquisa da nossa empresa não seja apenas um business
        e sim um ponto de mudança pedagógico e social.
      </p>
      <br />
    </about>
  );
}

export default Sobre;
