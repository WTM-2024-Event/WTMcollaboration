'use strict';

// Hamburguesa

// _toggle.onclick = () =>{
//     _items.classList.toggle("open")
// _toggle.classList.toggle("close")
// }

// Obtener referencia al elemento que activará el cambio al ser clickeado
const toggleButton = document.querySelector('.nav_toggle');

// Obtener referencia al elemento que se va a abrir o cerrar al hacer clic en el botón
const itemsContainer = document.querySelector('.navbar_items');

// Agregar un evento de clic al botón de alternancia
toggleButton.onclick = () => {
    // Alternar la clase "open" en el contenedor de elementos para mostrar u ocultar su contenido
    itemsContainer.classList.toggle("open");

    // Alternar la clase "close" en el botón de alternancia para cambiar su apariencia
    toggleButton.classList.toggle("close");
};
