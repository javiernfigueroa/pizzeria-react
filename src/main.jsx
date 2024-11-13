import React from "react";

//herramienta para renderizar
import ReactDOM from "react-dom/client";
import { MiApp } from "./MiApp";

// functional component para ser renderizado
// function App() {
//     return (
//         <h1>Hola !!!</h1>
//     )
// }

// forma de renderizar el componente en el DOM
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <MiApp />
    </React.StrictMode>
);


// es el punto de entrada de nuestra app?