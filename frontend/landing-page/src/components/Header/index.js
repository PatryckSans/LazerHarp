import {Link} from 'react-router-dom';
import './style.css';
function Header(){
    return(
        <header>
            <h1>Harp</h1>
            <div>
            <box><Link to="/welcome">Menu</Link></box>
            <box><Link to="/sobre">Projeto</Link></box>
            <box><Link to="/instrucao">Instrução</Link></box>
            <box><Link to="/musicas">Músicas</Link></box>
            <box><Link to="/midia">Mídia</Link></box>
            </div>
        </header>
    )
}
export default Header;