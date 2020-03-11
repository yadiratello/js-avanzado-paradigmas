let contador = ( () => {
    //por convencion a las variables privadas se le antepone un _variable
    let _contador = 10;

    function incrementar(){
        return _contador++;
    }
    function decrementar(){
        return _contador--;
    }
    function valorContador(){
        return _contador;
    }

    return {
        incrementar : incrementar,
        decrementar : decrementar,
        valor : valorContador
    }
})();

console.log(contador.valor());
contador.incrementar();
contador.incrementar();
console.log(contador.valor())