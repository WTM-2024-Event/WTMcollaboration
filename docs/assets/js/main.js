"use strict";const toggleButton=document.querySelector(".nav_toggle"),itemsContainer=document.querySelector(".navbar_items");toggleButton.onclick=()=>{itemsContainer.classList.toggle("open"),toggleButton.classList.toggle("close")};const ponentesInfo={"Ponente 1":{name:"Cristina rodríguez",image:"./assets/images/cris.png",title:"Cómo teletrabajar en un networking",place:"(Madrid, 1991)",bio:"Breve biografía del Ponente 1.",info:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, veniam consequuntur. Sapiente vitae minima sequi laboriosam expedita distinctio iure quasi natus ratione, eum quia autem aut fugiat ipsum perferendis possimus!"},"Ponente 2":{name:"Ainhoa de las Heras",image:"./assets/images/ainhoa.jpg",title:"Cómo teletrabajar en un networking",place:"(Barcelona, 1991)",bio:"Breve biografía del Ponente 2.",info:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, veniam consequuntur. Sapiente vitae minima sequi laboriosam expedita distinctio iure quasi natus ratione, eum quia autem aut fugiat ipsum perferendis possimus"},"Ponente 3":{name:"Raquel Ortiz",image:"./assets/images/Rachel.jpg",title:"Cómo teletrabajar en un networking",place:"(Barcelona, 1991)",bio:"Breve biografía del Ponente 3.",info:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, veniam consequuntur. Sapiente vitae minima sequi laboriosam expedita distinctio iure quasi natus ratione, eum quia autem aut fugiat ipsum perferendis possimus"},"Ponente 4":{name:"Alba Ginés",image:"./assets/images/istockphoto-1328879352-612x612.jpg",title:"Cómo teletrabajar en un networking",place:"(Barcelona, 1991)",bio:"Breve biografía del Ponente 4.",info:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, veniam consequuntur. Sapiente vitae minima sequi laboriosam expedita distinctio iure quasi natus ratione, eum quia autem aut fugiat ipsum perferendis possimus"},"Ponente 5":{name:"Aranzazu Barrutia",image:"./assets/images/istockphoto-1328879352-612x612.jpg",title:"Cómo teletrabajar en un networking",place:"(Barcelona, 1991)",bio:"Breve biografía del Ponente 5.",info:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, veniam consequuntur. Sapiente vitae minima sequi laboriosam expedita distinctio iure quasi natus ratione, eum quia autem aut fugiat ipsum perferendis possimus"},"Ponente 6":{name:"Paula Gonzalez",image:"./assets/images/istockphoto-1328879352-612x612.jpg",title:"Cómo teletrabajar en un networking",place:"(Barcelona, 1991)",bio:"Breve biografía del Ponente 6.",info:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, veniam consequuntur. Sapiente vitae minima sequi laboriosam expedita distinctio iure quasi natus ratione, eum quia autem aut fugiat ipsum perferendis possimus"}};function openModal(e){const i=document.getElementById("myModal"),a=document.getElementById("modalContent");i.classList.remove("hidden");if(!localStorage.getItem("modalShown")){const i=ponentesInfo[e];a.innerHTML=`\n      <div class="modal__column img-column">\n      <div class="shadow">\n        <img src="${i.image}" alt="${i.name}" class="modal__imgM">\n      </div> \n        <h2 class="modal__name">${i.name}</h2>\n      </div>\n      <div class="modal__column text-column">\n        <h3 class="modal__titleP">${i.title}</h3>\n        <p class="modal__text"><b>${i.place}</b> ${i.bio}</p>\n        <p class="modal__text">${i.info}</p>\n        <button class="modal__close" onclick="closeModal()">Volver</button>\n      </div>`,localStorage.setItem("modalShown","true")}}function closeModal(){const e=document.getElementById("modalContent");myModal.classList.add("hidden"),e.innerHTML="",localStorage.removeItem("modalShown")}