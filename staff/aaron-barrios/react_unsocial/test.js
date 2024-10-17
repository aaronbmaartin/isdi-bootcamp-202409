import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

// variable que almacena datos del usuario loggeado
let loggedInUser = null;

// ELEMENTOS QUE ACCEDEN AL DIV DE INDEX
const rootElement = document.getElementById('root');

// Variable ROOT QUE ME CREA EL ELEMENTO ROOT
const root = ReactDOM.createRoot(rootElement);

// Componente que maneja la imagen de Bulbasaur con un botón para eliminarla
const BulbComponent = () => {
    const [showBulb, setShowBulb] = useState(true); // Estado para mostrar u ocultar la imagen

    const deleteBulb = () => {
        setShowBulb(false); // Al hacer clic, ocultamos la imagen de Bulbasaur
    };

    return (
        <div>
            {showBulb && (
                <img
                    src="https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/001.png"
                    alt="Bulbasaur"
                />
            )}
            <button type="button" onClick={deleteBulb} id="butOak">
                Remove
            </button>
        </div>
    );
};

// Creación de otros elementos con React.createElement
const title = React.createElement('h1', null, 'YEPAAAA!');
const oak = React.createElement('img', {
    src: 'https://i.pinimg.com/originals/e6/cf/7a/e6cf7ac28a1ab88aa04108c22fd11fd9.png',
    id: 'oak',
});
const button = React.createElement('button', {
    type: 'button',
    onClick: () => alert('Clicked'),
    id: 'butOak',
}, 'Follow Prof. Oak');

// Renderizar todos los componentes en la raíz del DOM
root.render(
    <div>
        {title}
        {oak}
        {button}
        <BulbComponent /> {/* Agregamos el componente funcional aquí */}
    </div>
);