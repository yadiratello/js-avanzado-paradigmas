;
((c, d, ajax) => {
  const READY_STATE_COMPLETE = 4,
        OK = 200,
        NOT_FOUND = 404,
        preload = d.querySelector('#preload'),
        country = d.querySelector('#country'),
        menu = d.querySelector('.menu');

  menu.addEventListener('click', ajaxRequest);

  function ajaxRequest(e) {
    e.preventDefault();//prviene la accion de irse al enlace
    c(e);
    if (e.target.localName == 'a') {//si el objeto q desencadeno el evento es un <a>
      ajax.open('GET', e.target.href, true);//abrimos la peticion('metodo get, post', indico el href del enlace, true = peticion asincrona)
      ajax.addEventListener('readystatechange', countryInfo);//readystangechange = cuando hay una peticion de cambio ejecuta countyinfo
      ajax.setRequestHeader('content-type', 'text/html');//tipo de contenido,formato html
      ajax.send();//envio la peticion
    }
  }

  function countryInfo() {
    preload.innerHTML = '<i class="fa  fa-refresh  fa-spin  fa-5x"></i>';//cargando un icono de cargando
    //si todo es ok
    if (ajax.readyState === READY_STATE_COMPLETE && ajax.status === OK) {
      c(ajax);
      preload.innerHTML = '';//limpio el preload
      country.innerHTML = ajax.response;//agrega la respuesta de ajax
    } else if (ajax.status === NOT_FOUND) {//si no se encuentra la pagina
      preload.innerHTML = '';
      country.innerHTML = `<b>El servidor NO responde. Error N° ${ajax.status}: <mark>${ajax.statusText}</mark></b>`;
    }
  }

})(console.log, document, new XMLHttpRequest());