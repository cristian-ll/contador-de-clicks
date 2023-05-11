import './App.css';
import freeCodeCampLogo from './imagenes/freecodecamp-logo.png';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import { useState } from 'react';

function App() {

  const [numClicks, setNumClicks] = useState(0);
  // este es un hook, se crea una constante con un arreglo, el estado del objeto y la funcion a la que vamos a llamar para cambiar (actualizar) ese estado

  const manejarClick = () => {
    setNumClicks(numClicks + 1);
  };

  const reiniciarContador = () => {
    setNumClicks(0);
  };

  return (
    <div className='App'>
      <div className='freecodecamp-logo-contenedor'>
        <img className='freecodecamp-logo' src={freeCodeCampLogo} alt='Logo de FreeCodeCamp'/>
      </div>
      <div className='contenedor-principal'>
        <Contador numClicks = {numClicks} />
        <Boton 
          texto = 'Click'
          esBotonDeClick = {true}
          manejarClick = {manejarClick} />
        <Boton 
          texto = 'Reiniciar'
          esBotonDeClick = {false}
          manejarClick = {reiniciarContador} />
      </div>
    </div>
  );
}

export default App;
