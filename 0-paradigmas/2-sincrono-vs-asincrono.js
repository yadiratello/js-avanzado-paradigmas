//utilizando el modulo filesystem de node
const fs = require('fs'),
    file = './assets/archivo.txt';


// ***************  Codigo Sincrono     ***********
//Este codigo se ejecutara en orden de manera paralela
console.time('Sincrono');
console.log('Abriendo archivo');

let contenido;

try {
    contenido = fs.readFileSync(file, 'utf8');
    console.log(contenido);
} catch (error) {
    console.log(error.message);
}

console.log('Haciendo Otra cosa')
console.log('Haciendo Otra cosa mas...')

console.timeEnd('Sincrono');

console.log('**********fin sincrono********************\n');


// ***************  Codigo Asincrono     ***********
//Este codigo se ejecutara de manera concurrente sin importar el orden
console.time('Tiempo Asincrono');

console.log('Abriendo el archivo');

let content = fs.readFile(file, 'utf8', (error, content) => (error) ? console.log(error.message) : console.log(content));

console.log('Haciendo Otra cosa')
console.log('Haciendo Otra cosa mas...')

console.timeEnd('Tiempo Asincrono');

/*
Ejecutar:
$ node 0-paradigmas/2-sincrono-vs-asincrono.js
*/