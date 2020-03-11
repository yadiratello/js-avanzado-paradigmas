;
((c, d, ajax, json) => {
  const starwars = d.querySelector('#starwars'),
    pagination = d.querySelector('#pagination');

  //cuando el documento este listo
  d.addEventListener('DOMContentLoaded', e => {
    ajax.open('GET', 'https://swapi.co/api/people/', true)
    ajax.addEventListener('load', loadCharacters)
    ajax.send()
  });

  //al dar click 
  d.addEventListener('click', e => {
    e.preventDefault()
    c(e)
    //si el evento que desencadeno la accion fue un <a> 
    if (e.target.localName == 'a' && e.target.href.indexOf('null') === -1) {
      let startList = (e.target.search.slice(-1) - 1) * 10 + 1;//obteniendo el ultimo caracter de search
      //abriendo el documento
      ajax.open('GET', e.target.href || 'https://swapi.co/api/people/', true)
      ajax.addEventListener('load', () => loadCharacters(startList))
      ajax.send()
    }
  });

  //cargando personajes de la api star wars
  function loadCharacters(startList) {
    let starwarsInfo, starwarsTemplate = '';

    //si todo es OK
    if (ajax.status >= 200 && ajax.status < 400) {
      starwarsInfo = json.parse(ajax.responseText);
      c(starwarsInfo);

      starwarsTemplate += `<h3>Personajes de Starwars encontrados: ${starwarsInfo.count}</h3>
                           <ol start="${startList}"><strong>Nombre</strong><hr>`;

      //recorriendo el array results 
      starwarsInfo.results.forEach(people => starwarsTemplate += `<li>${people.name}</li>`);

      starwarsTemplate += `</ol>
                            <nav id="pagination">
                              <a href="${starwarsInfo.previous}" id="previous">atras</a>
                              <a href="${starwarsInfo.next}" id="next">siguiente</a>
                            </nav>`;
    } else {
      starwarsTemplate = `<b>El servidor NO responde. Error N° ${ajax.status}: <mark>${ajax.statusText}</mark></b>`;
    }
    starwars.innerHTML = starwarsTemplate;//pintando en el html 
  }  

})(console.log, document, new XMLHttpRequest(), JSON);