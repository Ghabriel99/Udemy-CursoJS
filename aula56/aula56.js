
// FACTORY FUNCTIONS (FUNÇÃO FÁRBICA)
function criaPessoa (nome,sobrenome,idade,a,p) {
    return {
        nome,
        sobrenome,
        idade,

        //GETTER
        get nomeCompelto() {
            return `${this.nome} ${this.sobrenome}`
        },
        // SETTER
        set nomeCompelto(valor) {
            valor = valor.split(' ')  //seta o nome completo como um array
            this.nome  = valor.shift() //remove e retorna o primeiro elemento do array
            // this.nome = valor.join(' ')
        },

        fala: function(assunto) {
            return `${nome} está falando sobre ${assunto}. `
        },
        altura: a,
        peso: p,

        // Getter
        get imc() {
            const indice = this.peso / (this.altura ** 2)
            return indice.toFixed(2)
        }
    }
}

const p1 = criaPessoa('Ghabriel', 'MS GH', 23, 1.9, 80)
p1.nomeCompelto = 'Ghabriel MS GH'

console.log(`${p1.nomeCompelto} tem o IMC de ${p1.imc}. `)
// console.log(p1.fala('JS'));
