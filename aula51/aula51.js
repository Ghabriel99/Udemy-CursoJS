function criaMultiplicador(multiplicador) {
    // retornar o parametro multiplicador
    return function(n) {
        return n * multiplicador
    }
}