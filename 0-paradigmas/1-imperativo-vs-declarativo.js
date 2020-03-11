//Leer un arreglo de numeros y obtener su raiz cuadrada de c/u
const numbers = [1,2,3,4,5];


/***************    Codigo Imperativo  ************ */ 
//es mas lento de leer
// .time() <- calcula cuanto tiempo tarda cierto fragmento de codigo
console.time('Imperativo');
function squared(numbers){
    let arr = [];
    
    for(let i = 0; i < numbers.length; i++){
        arr.push( Math.pow(numbers[i],2) );
    }
    return console.log(arr) ;
}
squared(numbers);
console.timeEnd('Imperativo');//termina el time


/***************    Codigo Declarativo  ************ */
console.time('Declarativo');

console.log( numbers.map( num => num*num ))

console.timeEnd('Declarativo');
