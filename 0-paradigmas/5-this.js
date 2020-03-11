;

((c) => {
    //USO DEL THIS
    //************  1. Asignacion de This Implicita  */
    /* 
    caso 1:
    this esta siendo invocado dentro d un metodo
    this, hace referencia al objeto, que contiene el metodo donde se invoca
    *****/
    c('\nAsignacion de this implicita\n')

    let persona = {
        nombre: 'Jon',
        edad: 33,
        saludar: function () {
            c(`Hola, mi nombre es ${this.nombre}`);
        }
    }
    persona.saludar();



    /*
    Caso 2: 
     */
    let saludando = function (obj) {
        obj.saludar = function () {
            c(`Hola, soy ${this.nombre}`);
        }
    }
    const jon = {
        nombre: 'Jon',
        edad: 33
    };
    const alvaro = {
        nombre: 'alvaro',
        edad: 35
    };

    saludando(jon);
    saludando(alvaro);
    jon.saludar();
    alvaro.saludar();



    /*
    Caso 3:
    Una funcion que retorna un objeto, q contiene un metodo que invoca el metodo this
    */
    let Humano = function (nombre, edad, mascota) {
        return {
            //atributos
            nombre: nombre,
            edad: edad,
            //mtodo
            saludar: function () {
                c(`Hola, soy ${this.nombre}`);
            },
            mascota: {
                nombre: mascota,
                saludar: function () {
                    c(`Hola, soy ${this.nombre} guau guau`);
                }
            }
        }
    }

    const mircha = Humano('Jonathan', 33, 'kenai');
    mircha.saludar();//accede al 1er metodo saludar 
    mircha.mascota.saludar();//accediendo al metodo saludar del objeto mascota
})(console.log);



((c) => {
    c('\nAsignacion de this Explicita\n');

    /******************     Asignacion de this Explicita    *******
     * Desde ES5 cuando deseamos explicitamente referenciar this contamos con 3 metodos:
     * call, apply y bind
     */
    const nombrar = function (f1, f2, f3) {
        c(`${this.nombre} es el lenguaje Front end de la web y tiene librerias y frameworks muy poderosos como: ${f1}, ${f2}, ${f3}`);
    }

    const lenguaje = {
        nombre: 'Javascript',
        version: 6
    }
    let frameworks = ['angular', 'React', 'Vue.js'];

    //call: permite definir a q va a hacer referencia this en su primer parametro, los parametros siguientes son los que recibe la funcion
    nombrar.call(lenguaje, frameworks[0], frameworks[1], frameworks[2]);
    //applu: permite referenciar this en el primer parametro pero este nos permite pasar un array, como los parametros de la funcion
    nombrar.apply(lenguaje, frameworks);
    //bind: devuelve una funcion en donde this hace referencia al objeto que pasamos como parametro
    let frameworksJS = nombrar.bind(lenguaje, frameworks[0], frameworks[1], frameworks[2]);
    frameworksJS();

})(console.log);


((c) => {
    // ********************     Asignacion con new  ******
    c('Asignacion con new');
    let framework = function (nombre, url, lenguaje) {
        this.nombre = nombre;
        this.url = url;
        this.lenguaje = lenguaje;
    }

    const react = new framework('React', 'https://react.com', 'Javascript'),
        vue = Object.create(framework);
    vue.nombre = 'Vue.js';
    c(react, vue);
})(console.log);




((c) => {
    // ********************     Asignacion Global  ******
    c('\nAsignacion Global\n');
    const dimeUnFramwork = function () {
        c(this.nombre1);
    }

    nombre1 = 'Angular';
    dimeUnFramwork();

})(console.log);




((c) => {
    // *************** 5.    Arrow Functions  ******
    c('\nArrow Functions\n');

    const lenguaje = {
        name: 'JavaScript',
        version: 6,
        frameworks: [
            { name: 'Angular', url: 'https://angular.com' },
            { name: 'React', url: 'https://angular.com' },
            { name: 'Vue.js', url: 'https://angular.com' }
        ],
        nombrar: function () {
            //el problema de this en js
            // this.frameworks.forEach(function (fw) {
            //     c(`${fw.name} es un framework de ${this.name}`);
            // })

            //con ES6 arrow functions
            this.frameworks.forEach(fw => c(`${fw.name} es un framework de ${this.name}`));
        }
    }
    lenguaje.nombrar();
})(console.log);