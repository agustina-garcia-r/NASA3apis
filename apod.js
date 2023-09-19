
const API_KEY = 'uCg6Zdp7QAgxQKstIyClUtDBq236OzhK14oVi9Za';
const boton =  document.getElementById('botoncitooo')
const downloadLink = document.getElementById('download-link');

       boton.addEventListener('click', () => {
            const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`;

            fetch(apiUrl)
                .then(response => response.json())
                .then(data => {
                    const acavalafotoDiv = document.getElementById('acavalafoto');
                    acavalafotoDiv.innerHTML = ''; 
                    //creo el titulo con un h2 y le indico que se encuentra en el title del json 
                    const tituloimagen = document.createElement('h2');
                   tituloimagen.textContent = data.title

                   const fecha = document.createElement('p');
                   fecha.textContent = data.date;


                const mensaje = document.createElement('p');
                mensaje.textContent = `Discover the cosmos today \u{1F314} ${data.date}! :)`;

                 //Creo un elemento tipo imágen
                    const imagen = document.createElement('img');
                    //le indico q el source de la imagen está en url de la data (el json)
                    imagen.src = data.url;
                   
                    //le agrego clases 
                    imagen.classList.add('img-fluid', 'rounded', 'shadow');

                    // Creo la explicación
                   const explicacion = document.createElement('p');
                   //el contenido de explicacion va a ser explanation el json
                    explicacion.textContent = data.explanation;

                    const autor = document.createElement('p')
                    autor.textContent = "Author: " + data.copyright;

                    boton.textContent = "Download"

                    // agrego los elementos al acavalafotodiv
                    acavalafotoDiv.appendChild(mensaje);
                    acavalafotoDiv.appendChild(tituloimagen);
                    acavalafotoDiv.appendChild(explicacion);
                    acavalafotoDiv.appendChild(imagen);
                    acavalafotoDiv.appendChild(autor);
                

                    boton.style.display = 'none';
                
            })
                   
                
                .catch(error => {
                    console.error('Error al obtener datos:', error);
                });
        });

 