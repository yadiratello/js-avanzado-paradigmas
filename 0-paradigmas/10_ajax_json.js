;
((c, d, ajax, json) => {

  const movies = d.querySelector('#movies');

  /*c(
    'JSON.stringify()',
    {},
    j.stringify({}),
    'JSON.parse()',
    '{value:2, result: 4}',
    j.parse('{"value":"2", "result": "4"}')
  )*/

  //1. abrimos el archivo json de manera asincrona
  ajax.open('GET', '../assets/movies.json', true);


  //2. al cargar la pagina
  ajax.addEventListener('load', e => {

    //almacenando el arreglo de movies y el contenido de cada elemento.
    let moviesInfo, moviesTemplate = '';

    /* Codigos de respuestas validos: 
    100 = cuando apenas se esta abriendo la conexion con la peticion
    200 = peticion OK
    300 = redirecciones que se convirten en peticiones OK
    400 y 500 = errores en el servidor o el cliente
    */
    if (ajax.status >= 200 && ajax.status < 400) {

      moviesInfo = json.parse(ajax.responseText);//formato de texto
      c(moviesInfo['movies'])

      //recorriendo el arreglo de movies
      moviesInfo['movies'].forEach(movie => {
        moviesTemplate += `
          <article>
            <h2>${movie.title}</h2>
            <p><b>${movie.year}</b></p>
            <p><i>${movie.genres}</i></p>
            <img src="${movie.poster}">
          </article>
        `
      })
    } else {
      moviesTemplate = `<b>El servidor NO responde. Error N° ${ajax.status}: <mark>${ajax.statusText}</mark></b>`;
    }

    movies.innerHTML = moviesTemplate;//pintando en el html
  })
  ajax.send();// enviando
})(console.log, document, new XMLHttpRequest(), JSON);