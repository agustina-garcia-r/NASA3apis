document.addEventListener('DOMContentLoaded', function () {
  const personasUrl = 'https://astros.iqfareez.com/data';
  const cardContainer = document.getElementById('People');

  fetch(personasUrl)
    .then(response => response.json())
    .then(data => {
      data.people.forEach(persona => {
        // Crear la tarjeta y agregar clases
        const divCard = document.createElement('div');
        divCard.classList.add('card', 'mb-3','bg-dark','text-white');

       
        const imageUrl = persona.contentUrl;

        
        const imageUrlHttps = imageUrl.replace('http://', 'https://');

        const imagen = document.createElement('img');
        imagen.src = imageUrlHttps;
        imagen.classList.add('card-img-top');
        divCard.appendChild(imagen);

        const divCardBody = document.createElement('div');
        divCardBody.classList.add('card-body');
        divCard.appendChild(divCardBody);

        const nombrePersona = document.createElement('h5');
        nombrePersona.classList.add('card-title');
        nombrePersona.textContent = persona.name;
        divCardBody.appendChild(nombrePersona);

        const craft = document.createElement('p');
        craft.classList.add('card-text');
        craft.textContent = 'Craft: ' + persona.craft;
        divCardBody.appendChild(craft);

        cardContainer.appendChild(divCard);
      });
    })
    .catch(error => {
      console.error('Error al obtener datos:', error);
    });
});

  










