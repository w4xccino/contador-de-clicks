import "./App.css";
import freeCodeCampLogo from "./images/freecodecamp-logo.png";
import Boton from "./components/Button";

function App() {
  const manejarClic = () => {
    console.log("xD");
  };
  const reiniciarContador = () => {
    console.log("xD");
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
