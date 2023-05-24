import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom';
import Sobre from './pages/Sobre/sobre';
import Welcome from './pages/Welcome/welcome';
import Header from './components/Header';
import Instrucao from './pages/Instrucao/instrucao';
import Musicas from './pages/Musicas/musicas';
import Midia from './pages/Midia/midia';

function RouterApp() {
    return (
    <BrowserRouter>
        <Header/>
        <Routes>
            <Route path="/welcome" element={<Welcome />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/instrucao" element={<Instrucao/>}/>
            <Route path="/musicas" element={<Musicas/>}/>
            <Route path="/midia" elemetn={<Midia/>}/>
        </Routes>
    </BrowserRouter>
    )
   }
   export default RouterApp;
   