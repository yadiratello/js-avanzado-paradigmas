;
((c, d) => {

    // Formas de crear un objto

    c('Objeto Literal');

    //***********   1. Objeto Literal   ****************
    const perro = {
        nombre: 'doki',
        edad: 1,
        raza: 'pug',
        genero: 'macho',
        esterilizado: true,
        //metodos
        ladrar() {
            c('guau guau');
        },
        comer(comida = 'carne') {
            c(`${this.nombre} come ${comida}`);
        },
        aparecer(imagen) {
            d.write(`<img src='${imagen}'>`)
        }
    }

    c(perro);
    perro.ladrar();
    perro.comer('galletas');
    perro.aparecer('https://camo.githubusercontent.com/3f8688c8c44b61b6bf77f7f65051edf118f0e4f1/68747470733a2f2f65642e7465616d2f7374617469632f696d616765732f6c6f676f2e737667');
    /********************        Fin       *************** */


    c('\nPrototipo Object\n')
    /********************   2. Prototipo Object  ******** */
    const perro2 = new Object();//creando un objeto del prototipo object
    //atributos
    perro2.name = 'Firulais';
    perro2.edad = 12;
    perro2.raza = 'mestizo';
    perro2.genero = 'hembra';
    perro2.esterilizado = true;
    //metodos
    perro2.ladrar = () => c('guau guau');
    perro2.comer = function (comida = 'croqueta') { c(`${this.name} come ${comida}`) };
    perro2.aparecer = imagen => d.write(`<img src='${imagen}'>`);
    //imprimiendo perro2
    c(perro2);
    //llamando a los metodos
    perro2.ladrar();
    perro2.comer();
    perro2.aparecer('https://camo.githubusercontent.com/3f8688c8c44b61b6bf77f7f65051edf118f0e4f1/68747470733a2f2f65642e7465616d2f7374617469632f696d616765732f6c6f676f2e737667');

    /***********************    Fin ********************** */



    /********************   2. Funcion Constructora ******** */
    c('\nFuncion constructora\n');

    function Perro(nombre, edad, raza, esterilizado) {
        //atributos 
        /*this <- hace referencia a todo lo que hay dentro de esta funcion.
        perro.nombre = nombre
        */
        this.nombre = nombre;
        this.edad = edad;
        this.raza = raza;
        this.esterilizado = esterilizado;
        //metodos
        //perro.ladrar = ....
        this.ladrar = () => c('guau guau');
        this.comer = (comida) => c(`${this.nombre} come ${comida}`);
        this.aparecer = (imagen) => d.write(`<img src='${imagen}'>`);
    }

    //creando objetos de la funcion constructora
    const perroOne = new Perro('Lazy', 3, 'Gran danes', 'hembra', false),
        perroTwo = new Perro('Lola', 4, 'San Bernardo', 'hembra', true),
        perroThree = new Perro('Juanito', 2, 'Pastor aleman', 'macho', false);

    c(perroOne);
    perroTwo.ladrar();
    perroTwo.comer('albondigas');
    perroThree.comer('vegetales');
    perroThree.aparecer('https://camo.githubusercontent.com/3f8688c8c44b61b6bf77f7f65051edf118f0e4f1/68747470733a2f2f65642e7465616d2f7374617469632f696d616765732f6c6f676f2e737667');

    /***********************    Fin ********************** */


    /********************   2. Clase ******** */
    c('\nFuncion constructora\n');

    class ClasePerro {
        //el constructor se ejecuta al momento de instanciar una clase
        constructor(nombre, edad, raza, genero, esterilizado) {
            this.nombre = nombre;
            this.edad = edad;
            this.raza = raza;
            this.genero = genero;
            this.esterilizado = esterilizado;
        }
        //metodos
        ladrar() {
            c('guau guau');
        }
        comer(comida) {
            c(`${this.nombre} come ${comida}`);
        }
        aparecer(imagen) {
            d.write(`<img src='${imagen}'>`);
        }
    }

    const perroUno =  new ClasePerro('candy',10,'pequinez','hembra',false);
    const perroDos =  new ClasePerro('ramon',6,'Doberman','macho',true);

    c(perroUno);
    perroUno.comer('golosinas');
    c(perroDos.nombre,
        perroDos.raza,
        perroDos.genero);
    perroDos.comer('fruta');   

    /***********************    Fin ********************** */

})(console.log, document);