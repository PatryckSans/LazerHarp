import "./style.css";

function Header() {
  return (
    <header>
      <h2>LAZER HARP</h2>
      <div className="item-area">
        <a href="#about">Sobre Nós</a>
        <a href="#gallery">Galeria</a>
        <a href="#contact">Contato</a>
      </div>
    </header>
  );
}

export default Header;
