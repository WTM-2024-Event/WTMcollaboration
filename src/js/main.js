'use strict';

// Hamburguesa
const toggleButton = document.querySelector('.nav_toggle');
const itemsContainer = document.querySelector('.navbar_items');

toggleButton.onclick = () => {
  itemsContainer.classList.toggle('open');

  toggleButton.classList.toggle('close');
};

// Modales Ponentes

// Objeto que almacena la información de los ponentes

const ponentesInfo = {
  'Ponente 1': {
    name: 'Cristina rodríguez',
    image: './images/crisFlor.png',
    title: 'Cómo teletrabajar en un networking',
    place: '(Madrid, 1991)',
    bio: 'Breve biografía del Ponente 1.',
    info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, veniam consequuntur. Sapiente vitae minima sequi laboriosam expedita distinctio iure quasi natus ratione, eum quia autem aut fugiat ipsum perferendis possimus!',
  },
  'Ponente 2': {
    name: 'Ainhoa de las Heras',
    image: './images/ainhoaFlor.png',
    title: 'Cómo teletrabajar en un networking',
    place: '(Barcelona, 1991)',
    bio: 'Breve biografía del Ponente 2.',
    info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, veniam consequuntur. Sapiente vitae minima sequi laboriosam expedita distinctio iure quasi natus ratione, eum quia autem aut fugiat ipsum perferendis possimus',
  },
  'Ponente 3': {
    name: 'Raquel Ortiz',
    image: './images/rachelFlor.png',
    title: 'Cómo teletrabajar en un networking',
    place: '(Barcelona, 1991)',
    bio: 'Breve biografía del Ponente 3.',
    info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, veniam consequuntur. Sapiente vitae minima sequi laboriosam expedita distinctio iure quasi natus ratione, eum quia autem aut fugiat ipsum perferendis possimus',
  },
  'Ponente 4': {
    name: 'Alba Ginés',
    image: './images/defaultFlor.png',
    title: 'Cómo teletrabajar en un networking',
    place: '(Barcelona, 1991)',
    bio: 'Breve biografía del Ponente 4.',
    info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, veniam consequuntur. Sapiente vitae minima sequi laboriosam expedita distinctio iure quasi natus ratione, eum quia autem aut fugiat ipsum perferendis possimus',
  },
  'Ponente 5': {
    name: 'Aranzazu Barrutia',
    image: './images/defaultFlor.png',
    title: 'Cómo teletrabajar en un networking',
    place: '(Barcelona, 1991)',
    bio: 'Breve biografía del Ponente 5.',
    info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, veniam consequuntur. Sapiente vitae minima sequi laboriosam expedita distinctio iure quasi natus ratione, eum quia autem aut fugiat ipsum perferendis possimus',
  },
  'Ponente 6': {
    name: 'Paula Gonzalez',
    image: './images/defaultFlor.png',
    title: 'Cómo teletrabajar en un networking',
    place: '(Barcelona, 1991)',
    bio: 'Breve biografía del Ponente 6.',
    info: '¿Qué podemos hacer en nuestro día a día para salvar al planeta? El tema de la sostenibilidad también aplica a la informática. <br>El Green Computing es un área de la informática que estudia el uso de los recursos y su impacto ambiental. <br>Entonces, ¿podemos hacer nuestro trabajo más sostenible? ¿Y es el trabajo en remoto siempre más sostenible? <br>Vamos a ver una introducción al Green Computing y que podemos hacer cotidianamente para aportar nuestro granito de arena al medioambiente.',
  },
};

const modal = document.getElementById('myModal');
const modalContent = document.getElementById('modalContent');

function openModal(ponente) {
  modal.classList.remove('hidden');

  const modalShown = localStorage.getItem('modalShown');
  if (!modalShown) {
    const info = ponentesInfo[ponente];

    modalContent.innerHTML = `
      <div class="modal__column img-column">
      <div class="shadow">
        <img src="${info.image}" alt="${info.name}" class="modal__imgM">
      </div> 
        <h2 class="modal__name">${info.name}</h2>
      </div>
      <div class="modal__column text-column">
        <h3 class="modal__titleP">${info.title}</h3>
        <p class="modal__text">${info.info}</p>
        <button class="modal__close" onclick="closeModal()">Volver</button>
      </div>`;

    localStorage.setItem('modalShown', 'true');
  }
}

function closeModal() {
  modal.classList.add('hidden');
  modalContent.innerHTML = '';

  localStorage.removeItem('modalShown');
}