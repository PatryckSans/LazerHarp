import React from "react";
import UserCreationForm from "./components/UserCreation/UserCreationForm";
import UserLoginForm from "./components/UserLogin/UserLoginForm";
// import Header from "./components/Header";
import RouterApp from "./components/RouterApp";
import Sobre from "./pages/Sobre/sobre";
import Contato from "./pages/Contato";
import ImageGallery from "./components/Display";

const App = () => {
  return (
    <div className="AppArea">
      <RouterApp />
      <Sobre />
      <ImageGallery />
      <Contato />
    </div>
  );
};

export default App;
