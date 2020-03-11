((c) => {
    /************  POO con clases   *********** */
    c('\nPOO con Clases\n')

    class Carrito {

        constructor(articulo) {
            this._articulo = articulo,
                this._carrito = {
                }
        }
        agregarArticulo(articulo, cantidad) {
            this._carrito[articulo] = cantidad;
        }

        quitarArticulo(articulo) {
            delete this._carrito[articulo];
        }

        _iterable() {
            let message = '\nCarrito de compras:\n';
            for (let key in this._carrito) {
                message += `\t${this._carrito[key]} - ${key}\n`;
            }
            return message;
        }

        mostrarArticulos(articulo = 'todos') {
            return (articulo === 'todos') ? this._iterable() : (this._carrito.hasOwnProperty(articulo)) ? `${articulo} ${this._carrito[articulo]}` : `No existe ${articulo} en el carrito`;
        }
    }



    const comics = new Carrito('Comics');

    c(comics);
    comics.agregarArticulo('Flash Point', 2);
    comics.agregarArticulo('The return of the dark', 3);
    comics.agregarArticulo('Chapulin colorado', 13);
    c(comics.mostrarArticulos());
    c(comics.mostrarArticulos('Flash Point paradoc'));
    c(comics.mostrarArticulos('Chapulin colorado'));
    comics.quitarArticulo('Chapulin colorado');
    c(comics.mostrarArticulos('Chapulin colorado'));

    const libros = new Carrito('Libros'),
        musica = new Carrito('Musica'),
        juegos = new Carrito('Juegos');

    c(libros);
    c(musica);
    c(juegos);



})(console.log);


((c) => {
    /************  Herencia, Polimorfismo, Metodo constructor, setters y getters,       Modificadores de acceso(publico, estatico, privado), Super constructores, Super llamadas y Mixins *********** */
    /*
    Privacidad en Javascript:
    En JS las propiedades de los objetos son publicas, en las clases es igual
    Para hacer privadas ciertas propiedades tenemos q recurrir al uso de weakmap
    */
    c('\nHerencia, Polimorfismo, Metodo constructor, setters y getters, Modificadores de acceso(publico, estatico, privado), Super constructores, Super llamadas y Mixins\n')


    let privado = new WeakMap()
    // clase Abuelo
    class Telefono {

        constructor(marca, modelo, numero) {
            this.marca = marca;
            this.modelo = modelo;
            // this._numero = numero;
            privado.set(this, { _numero: numero });
            this.puedoLlamar = true;
        }

        //metodo estatico: no es necesario instanciar la clase para poder acceder a este metodo
        static definicionTelefono() {
            c('El telefono es un dispositivo de telecomunicacion diseñadp àra transmitir señales acusticas a distancia por medio de señales electricas.');
        }

        //setters and getters: deben ser llamados como si fuesen una propiedad
        set setNumero(numero) {
            // this._numero = numero;
            privado.get(this)._numero = numero;
        }
        get getNumero() {
            // return c(this._numero);
            return c(privado.get(this)._numero);
        }

        llamar() {
            c('Ring Ring...')
        }

        verInfo() {
            return c(`Nombre Clase: ${this.constructor.name}\n`,
                `\tModelo: ${this.modelo}\n`,
                `\tMarca: ${this.marca}\n`,
                `\tPuedo Llamar: ${this.puedoLlamar}\n`);
        }
    }


    //Mixins
    const operadora = Superclass => class extends Superclass{
        asignarOperadora(operadora){
            return c(`La operadora asignada es: ${operadora}`);
        }
    }
    const red = Superclass => class extends Superclass{
        asignarRed(red){
            return c(`La red de datos asignada es: ${red}`);
        }
    }


    //clase Padre
    class Celular extends operadora( red (Telefono)) {

        constructor(marca, modelo, numero) {
            super(marca, modelo, numero);
            this.tengoCables = false;
        }
        vibrar() {
            c('Brrr brrr brrr....')
        }
        //Polimorfismo: el mismo metodo puede devolver diferentes resultados dependiendo de su definicion en x clase
        verInfo() {
            //super llamada: con super se manda a llamar al metodo verInfo de la clase padre(telefono)
            // return super.verInfo;
            return c(`${this.constructor.name}\n`,
                `\tModelo: ${this.modelo}\n`,
                `\tMarca: ${this.marca}\n`,
                `\tPuedo Llamar: ${this.puedoLlamar}\n`,
                `\tTengo cables: ${this.tengoCables}`);
        }

    }

    //clase Hijo
    class Smartphone extends Celular {
        constructor(marca, modelo, numero) {
            super(marca, modelo, numero);
            this.tengoInternet = true;
        }
        conectarInternet() {
            c('Conectando a internet...');
        }
        verInfo() {
            return c(`${this.constructor.name}\n`,
                `\tModelo: ${this.modelo}\n`,
                `\tMarca: ${this.marca}\n`,
                `\tPuedo Llamar: ${this.puedoLlamar}\n`,
                `\tTengo cables: ${this.tengoCables}\n`,
                `\tTengo conexion a internet: ${this.tengoInternet}`);
        }
    }


    let telefono1 = new Telefono('panasonic', 'm40', '1234321');
    c(telefono1);
    Telefono.definicionTelefono();
    telefono1.llamar();
    telefono1.setNumero = '7771234';
    telefono1.getNumero;
    telefono1.verInfo();

    let celular1 = new Celular('Nokia', '5123', '987876544');
    c(celular1);
    celular1.llamar();
    celular1.setNumero = '989999999';
    celular1.getNumero;
    celular1.verInfo();
    celular1.asignarRed('4G');

    let smartphone1 = new Smartphone('Samsumg', 'A10', '987677666');
    c(smartphone1);
    smartphone1.llamar();
    smartphone1.vibrar();
    smartphone1.setNumero = '912345309';
    smartphone1.getNumero;
    smartphone1.verInfo();
    smartphone1.asignarOperadora('Movistar');
    smartphone1.asignarRed('3G');

})(console.log);