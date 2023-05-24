import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./login";
import Welcome from "./pages/Welcome/welcome";
import Sobre from "./pages/Sobre/sobre";
import Header from "./components/Header";
import Instrucao from "./pages/Instrucao/instrucao";
import Musicas from "./pages/Musicas/musicas";
import Midia from "./pages/Midia/midia";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/welcome">
            <Header />
            <Welcome />
          </Route>
          <Route path="/sobre">
            <Header />
            <Sobre />
          </Route>
          <Route path="/instrucao">
            <Header />
            <Instrucao />
          </Route>
          <Route path="/musicas">
            <Header />
            <Musicas />
          </Route>
          <Route path="/midia">
            <Header />
            <Midia />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
