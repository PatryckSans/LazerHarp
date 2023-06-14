import React from "react";
import "./style.css";
import galeria1 from "../../images/galeria1.jpg";
import galeria2 from "../../images/galeria2.jpg";
import galeria3 from "../../images/galeria3.jpg";
import galeria4 from "../../images/galeria4.jpg";

const ImageGallery = () => {
  return (
    <div id="gallery">
      <h2>Galeria de Imagens:</h2>
      <div className="container">
        <img src={galeria4} alt="Imagem 4" />
        <img src={galeria2} alt="Imagem 2" />
        <img src={galeria3} alt="Imagem 3" />
        <img src={galeria1} alt="Imagem 1" />
      </div>
    </div>
  );
};

export default ImageGallery;
