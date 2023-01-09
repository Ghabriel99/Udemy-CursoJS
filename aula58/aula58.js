// Constructor Function

function Pessoa(nome,sobrenome,idade) {

    // Atributos ou métodos privados
    const metoInterno = function () {
        return;
    }

    // Atributos ou métodos públicos da func Pessoa
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;

    this.metodo = function () {
        console.log(this.nome + ': sou um método');
    }
}

const p1 = new Pessoa('Ghabriel', 'MS GH', 23)
const p2 = new Pessoa('Pra', 'DEV', 2023)

console.log(p2);
