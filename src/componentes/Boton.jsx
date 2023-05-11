import '../hojas-de-estilo/Boton.css';

function Boton({ texto, esBotonDeClick, manejarClick }) {
    return (
        <button 
        className={ esBotonDeClick ? 'boton-click' : 'boton-reiniciar' } // este es un operador ternario, sirve para determinar por medio de un true o false que tipo de asignación va a tener (en este caso que tipo de clase)
        onClick={manejarClick} > 
            {texto}
        </button>
    );
}

export default Boton; 

// manejarClick es una funcion que va a resivir desde el componente que renderise o cree este objeto
// por que cuando nosotros hagamos click en ese boton vamos a tener que actualizar el estado de otro 
// componente que es el contador 