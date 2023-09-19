
document.addEventListener("DOMContentLoaded", function () {
    //busco input por id y lo almaceno en const busqueda
    const busqueda = document.getElementById('buscarImagen');
     //busco boton por id y lo almaceno en const botoncitop
    const botoncitop = document.getElementById('botonnn');
     //busco div por id y lo almaceno en const galeria
    const galeria = document.getElementById('Galeria');
//creo un addeventlistener al boton
    botoncitop.addEventListener('click', function () {
        //almaceno dentro de la cte query el valor del input q le da el usuario cuando busca algo, ejemplo si busca saturnoo ahora query=saturno
        const query = busqueda.value;
        //deifno la url de la api en una cte
        const API_URL = 'https://images-api.nasa.gov';

        // fetch al endpoint para poder buscar cosas
        fetch(`${API_URL}/search?q=${query}`)
            .then(response => response.json())
            .then(data => {
                galeria.innerHTML = ''; // limpiar contenido anterior

                //seentra a collection y luego a items del json y se hace un foreach
                data.collection.items.forEach(item => {
                    //si existe links dentro de item entonces...
                    if (item.links)  {
                        // entra a item, luego a links en la posición 0 y luego a href (que es la ruta que es .jpg sino el otro href de la posicion 1 era .srt)
                        //al entrar se le guarda lo que contiene en la cte imgSrc
                        const imgSrc = item.links[0].href;
                        //se crea un elemento imagen y se guarda en imgElement
                        const imgElement = document.createElement('img');
                        //el src de dicho elemento tipo imagen es imgSRC (lo que se guardo anteriormente del href q era .jpg en la posicoin 0 de links)
                        imgElement.src = imgSrc;
                        //se le agregan clases
                        imgElement.classList.add('img-fluid', 'rounded', 'mb-3');
                         //se guarda el imgElement en el div galeria
                        galeria.appendChild(imgElement);
                    }
                });
            })
            .catch(error => {
                // por si hay errores
                console.error('Error al realizar la búsqueda:', error);
            });
    });
});
