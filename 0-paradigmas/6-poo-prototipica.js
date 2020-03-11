;
((c) => {
    c('Anidacion de objetos');
    /********************   Anidacion de Objetos
    /**Un objeto es una coleccion de variables(atributos o campos) y funciones(metodos) de manera estructural.
     
    * Entoncesun objeto puede tener propiedades y estas propiedades tener en su interior mas propiedades que incluso sean objetos
     *  */
    /* Podemos acceder a las propiedades de un objeto con:
     * 1. Notacion del punto
     * 2. Notacion de array
     * 3. Notacion mixta
     */
    const curso = {
        titulo: 'Javascript Avanzado: Paradigmas de programacion',
        docente: {
            nombre: 'Jon Mircha',
            edad: 33,
            nacionalidad: 'Mexicana',
            contacto: {
                email: 'mircha@gmail.com',
                url: 'https://jonmircha.com',
                twitter: '@jonmircha',
                ubicacion: 'CDMX'
            }
        },
        costo: 40,
        url: 'https://ed.team/cursos/javascript-avanzado',
        online: true,
        plataforma: {
            nombre: 'EDteam',
            url: 'https://ed.team',
            oficinas: ['Lima', 'Bogota', 'Namekusei']
        }
    }

    //acceder al nombre del docente
    c(curso.docente.nombre);
    //acceder a la url del profesor
    c(curso['docente'].contacto['url']);
    // nombre y url de la plataforma 
    c(curso.plataforma['nombre']);
    c(curso['plataforma']['url']);
    c(curso['plataforma']['oficinas'][0]);

})(console.log);


((c) => {
    /************   POO con closures    *********** */
    c('\nPOO con closures\n')
    function carrito(articulo) {
        let _articulo = articulo,
            _carrito = {
            }

        function agregarArticulo(articulo, cantidad) {
            _carrito[articulo] = cantidad;
        }

        function quitarArticulo(articulo) {
            delete _carrito[articulo];
        }

        function _iterable() {
            let message = '\nCarrito de compras:\n';
            for (let key in _carrito) {
                message += `\t${_carrito[key]} - ${key}\n`;
            }
            return message;
        }

        function mostrarArticulos(articulo = 'todos') {
            return (articulo === 'todos') ? _iterable() : (_carrito.hasOwnProperty(articulo)) ? `${articulo} ${_carrito[articulo]}` : `No existe ${articulo} en el carrito`;
        }

        return {
            agregarArticulo: agregarArticulo,
            quitarArticulo: quitarArticulo,
            mostrarArticulos: mostrarArticulos
        }
    }


    const comics = carrito('Comics');

    c(comics);
    comics.agregarArticulo('Flash Point', 2);
    comics.agregarArticulo('The return of the dark', 3);
    comics.agregarArticulo('Chapulin colorado', 13);
    c(comics.mostrarArticulos());
    c(comics.mostrarArticulos('Flash Point paradoc'));
    c(comics.mostrarArticulos('Chapulin colorado'));
    comics.quitarArticulo('Chapulin colorado');
    c(comics.mostrarArticulos('Chapulin colorado'));


})(console.log);


((c) => {
    /************  POO con  Funcion constructora   *********** */
    c('\nPOO con Funcion constructora\n')
    function carrito(articulo) {
        this._articulo = articulo,
            this._carrito = {
            }

        this.agregarArticulo = (articulo, cantidad) =>
            this._carrito[articulo] = cantidad;


        this.quitarArticulo = articulo =>
            delete this._carrito[articulo];


        this._iterable = () => {
            let message = '\nCarrito de compras:\n';
            for (let key in this._carrito) {
                message += `\t${this._carrito[key]} - ${key}\n`;
            }
            return message;
        }

        this.mostrarArticulos = (articulo = 'todos') => {
            return (articulo === 'todos') ? this._iterable() : (this._carrito.hasOwnProperty(articulo)) ? `${articulo} ${this._carrito[articulo]}` : `No existe ${articulo} en el carrito`;
        }
    }


    const comics = new carrito('Comics');

    c(comics);
    comics.agregarArticulo('Flash Point', 2);
    comics.agregarArticulo('The return of the dark', 3);
    comics.agregarArticulo('Chapulin colorado', 13);
    c(comics.mostrarArticulos());
    c(comics.mostrarArticulos('Flash Point paradoc'));
    c(comics.mostrarArticulos('Chapulin colorado'));
    comics.quitarArticulo('Chapulin colorado');
    c(comics.mostrarArticulos('Chapulin colorado'));


})(console.log);


((c) => {
    /************  POO con  Prototype   *********** */
    c('\nPOO con Prototype\n')
    function carrito(articulo) {
        this._articulo = articulo,
            this._carrito = {
            }
    }
    // carrito.prototype.agregarArticulo = function(){}
    // carrito.prototype.quitarArticulo = function(){}
    // carrito.prototype.mostrarArticulo = function(){}

    carrito.prototype = {
        agregarArticulo: function (articulo, cantidad) {
            this._carrito[articulo] = cantidad;
        },

        quitarArticulo: function (articulo) {
            delete this._carrito[articulo];
        },

        _iterable: function () {
            let message = '\nCarrito de compras:\n';
            for (let key in this._carrito) {
                message += `\t${this._carrito[key]} - ${key}\n`;
            }
            return message;
        },

        mostrarArticulos: function (articulo = 'todos') {
            return (articulo === 'todos') ? this._iterable() : (this._carrito.hasOwnProperty(articulo)) ? `${articulo} ${this._carrito[articulo]}` : `No existe ${articulo} en el carrito`;
        }
    }



    const comics = new carrito('Comics');

    c(comics);
    comics.agregarArticulo('Flash Point', 2);
    comics.agregarArticulo('The return of the dark', 3);
    comics.agregarArticulo('Chapulin colorado', 13);
    c(comics.mostrarArticulos());
    c(comics.mostrarArticulos('Flash Point paradoc'));
    c(comics.mostrarArticulos('Chapulin colorado'));
    comics.quitarArticulo('Chapulin colorado');
    c(comics.mostrarArticulos('Chapulin colorado'));

    const libros = new carrito('Libros'),
        musica = new carrito('Musica'),
        juegos = new carrito('Juegos');

    c(libros);
    c(musica);
    c(juegos);



})(console.log);

((c) => {
    /************  Herencia Prototipica   *********** */
    // las funciones constructoras pueden heredar directamente de otros connstructores
    c('\nHerencia Prototipica\n')

    //Abuelo
    function Telefono() {
        this.puedoLlamar = true;
    }

    Telefono.prototype = {
        llamar: function () {
            c('Ring Ring...')
        }
    }
    //Padre
    function celular() {
        this.tengoCables = false;
    }
    //Celular, al ser una instancia de telefono automaticamente va a heredar los metodos y propiedades de telefono
    celular.prototype = new Telefono();//hereda de telefono

    celular.prototype.vibrar = function () {
        c('Brrr brrr brrr....')
    }
    //Hijo
    function smartphone() {
        this.tengoInternet = true;
    }
    smartphone.prototype = new celular();//hereda de celular
    smartphone.prototype.conectarInternet = function () {
        c('Conectando a internet...');
    }



    const g4 = new smartphone();
    c(g4);
    g4.llamar();
    g4.vibrar();
    g4.conectarInternet();
    c('Tengo internet:'+g4.tengoInternet);
    c('Tengo cables:'+g4.tengoCables);
    c('Pudo llamar:'+g4.puedoLlamar);


    const nokia5120 = new celular();
    c(nokia5120);
    nokia5120.llamar();
    nokia5120.vibrar();
    nokia5120.conectarInternet();

})(console.log);