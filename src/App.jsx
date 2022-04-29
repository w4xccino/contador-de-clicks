import "./App.css";
import freeCodeCampLogo from "./images/freecodecamp-logo.png";
import Boton from "./components/Button";
import Contador from "./components/Contador";
import { useState } from "react";

function App() {
  const [numClics, setNumClics] = useState(0);
  const manejarClic = () => {
    setNumClics(numClics + 1);
  };

  const reiniciarContador = () => {
    setNumClics(0);
  };

  return (
    <div className="App">
      <div className="freecodecamp-logo-contenedor">
        <img
          className="freecodecamp-logo"
          src={freeCodeCampLogo}
          alt="Logo de Free Code Camp"
        />
      </div>
      <div className="contenedor-principal">
        <Contador numClics={numClics} />
        <Boton texto="Click" esBotonDeClic={true} manejarClic={manejarClic} />
        <Boton
          texto="Reiniciar"
          esBotonDeClic={false}
          manejarClic={reiniciarContador}
        />
      </div>
    </div>
  );
}

export default App;
