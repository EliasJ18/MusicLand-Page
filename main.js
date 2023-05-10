const infoApi = document.getElementById("infoApi");
const call = document.createElement("p");

const callAPI = () => {
    fetch("https://localhost:44391/api/Artistas").then(res => res.json()).then(data => {

 var valor = 0;
        for(i = 0; i < data.length; i++){
           
          const lista = document.createElement('li');
              lista.setAttribute("id", "name")
              lista.innerHTML = `<h2 class="artistName">${data[i].name}</h2>
              <img class="image${data[i].id}" src="image/${data[i].image}" alt="${data[i].name} image">
              <h4 class="tituloSongs">Songs || Canciones:</h4> <hr>`;
              infoApi.appendChild(lista);
            
          for(j = 0; j < data[i].canciones.length; j++) {
            
            const call = document.createElement("p");
              call.innerHTML = `${[j + 1] + " - "}` + `${data[i].canciones[j].titulo}<hr class="hr${valor += 1}">`;
              lista.appendChild(call);
          }
          
              

              //${data[i].canciones[0].titulo + ", " + data[i].canciones[1].titulo + ", " + data[i].canciones[2].titulo}
        //       const juegos = document.createElement('li');
        // juegos.setAttribute("class", "gamesList");
        // juegos.innerHTML = `<img src="images/${data[i].image}" alt="img-${data[i].image}">
        // <h1 class="gameName">${data[i].name}</h1>
        // <p class="data">Genero: ${data[i].gender}</p>
        // <p class="data">Idioma: ${data[i].languages}</p>
        // <p class="data">Empresa Desarrolladora: ${data[i].empresa.name}</p>`
        // listaJuegos.appendChild(juegos);
            

    }
  }).catch(e => console.error(new Error(e)));

}

callAPI();