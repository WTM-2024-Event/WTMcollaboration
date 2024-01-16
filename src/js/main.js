'use strict';

// Hamburguesa
const toggleButton = document.querySelector('.nav_toggle');
const itemsContainer = document.querySelector('.navbar_items');

toggleButton.onclick = () => {
  itemsContainer.classList.toggle('open');

  toggleButton.classList.toggle('close');
};

// Modales Ponentes
const openModal = document.querySelector('.js-modal');
const closeModal = document.querySelector('.js-close');
const modal = document.querySelector('.js-modalPaula');

openModal.addEventListener('click', (event) => {
  event.preventDefault();
  modal.classList.remove('hidden');
});

closeModal.addEventListener('click', (event) =>{
    event.preventDefault();
    modal.classList.add('hidden');
})