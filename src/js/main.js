'use strict';

// Hamburguesa
const toggleButton = document.querySelector('.nav_toggle');
const itemsContainer = document.querySelector('.navbar_items');

toggleButton.onclick = () => {
    itemsContainer.classList.toggle("open");

    toggleButton.classList.toggle("close");
};
