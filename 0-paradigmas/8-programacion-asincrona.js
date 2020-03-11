;

((c) => {
    /*************  Programacion Asincrona  ************* */
    c('*************  Programacion Asincrona *************');
    c('*************  Callbacks *************');
    const cuadrado = (value, callback) => {
        setTimeout(() => {
            callback(value, value * value);
        }, 0 | Math.random() * 100);
    }

    cuadrado(1, (value, result) => {
        c('Inicio callback');
        c(`callback: ${value}, ${result}`);
        cuadrado(2, (value, result) => {
            c(`callback: ${value}, ${result}`);
            cuadrado(3, (value, result) => {
                c(`callback: ${value}, ${result}`);
                cuadrado(4, (value, result) => {
                    c(`callback: ${value}, ${result}`);
                    cuadrado(5, (value, result) => {
                        c(`callback: ${value}, ${result}`);
                    })
                })
            })
        })
    })
})(console.log);


((c) => {
    /*************  Programacion Asincrona  ************* */
    c('*************  Promesas *************');
    const cuadrado = value => {

        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({ value: value, result: value * value });
            }, 0 | Math.random() * 100);

        })

    }

    cuadrado(0).then(obj => {
        c('Inicio Promise');
        c(`Promise: ${obj.value}, ${obj.result}`);
        return cuadrado(1);
    }).then(obj => {
        c(`Promise: ${obj.value}, ${obj.result}`);
        return cuadrado(2);
    }).then(obj => {
        c(`Promise: ${obj.value}, ${obj.result}`);
        return cuadrado(3);
    }).then(obj => {
        c(`Promise: ${obj.value}, ${obj.result}`);
        return cuadrado(4);
    }).then(obj => {
        c(`Promise: ${obj.value}, ${obj.result}`);
        return cuadrado(5);
        c('Fin Promise');
    }).catch(err => c(err));

})(console.log);


((c) => {
    /*************  Programacion Asincrona  ************* */
    c('*************  Generators *************');
    const cuadrado = value => {
        setTimeout(() => {
            c({ value: value, result: value * value })
        }, 0 | value * 100);

        return {
            value: value,
            result: value * value
        }
    }

    function* generador() {
        c('Inicio Generator');
        yield cuadrado(0);
        yield cuadrado(1);
        yield cuadrado(2);
        yield cuadrado(3);
        yield cuadrado(4);
        yield cuadrado(5);
        c('Fin Generator');
    }

    let gen = generador();
    c(gen.next());
    c(gen.next().done);
    c(gen.next().value);
    c(gen.next());
})(console.log);


((c) => {
    /*************  Programacion Asincrona  ************* */
    c('*************  Async - Await Functions *************');
    const cuadrado = value => {

        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({ value: value, result: value * value });
            }, 0 | Math.random() * 100);
        })
    }

    async function asyncAwait() {
        c('Inicio de async await function');
        let obj = await cuadrado(0)
        c(`async function: ${obj.value}, ${obj.result}`);
        obj = await cuadrado(1);
        c(`async function: ${obj.value}, ${obj.result}`);
        obj = await cuadrado(2);
        c(`async function: ${obj.value}, ${obj.result}`);
        obj = await cuadrado(3);
        c(`async function: ${obj.value}, ${obj.result}`);
        obj = await cuadrado(4);
        c(`async function: ${obj.value}, ${obj.result}`);
        obj = await cuadrado(5);
        c(`async function: ${obj.value}, ${obj.result}`);
        c('Fin de async await function');
    }

    asyncAwait();
})(console.log);