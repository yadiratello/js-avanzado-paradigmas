//codigo frontend
function parImparFrontend() {
    let numero = prompt('Ingrese un numero'),
        modulo = numero % 2,
        par = `El numero ${numero} es par`,
        impar = `El numero ${numero} es impar`;
    //operador ternario
    modulo === 0 ? console.log(par) : console.log(impar);
}

// parImparFrontend();

// codigo backend(nodejs)
function parImparbackend() {
    //interactuando con la terminal 
    process.stdout.write('Ingrese un numero:');//stdout <- imprime en consola
    process.stdin.once('data', numero => {
        let modulo = numero % 2,
            par = `El numero ${numero} es par`,
            impar = `El numero ${numero} es impar`,
            residuo = (modulo === 1) ? impar : par;

        process.stdout.write(residuo);
        process.exit();
    }); //stdin  <- permite ingresar datos
}
parImparbackend();
//en la terminal ejecutar 
// node 0-paradigmas/0-par-impar.js