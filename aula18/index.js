const pessoa1 = {
    nome: 'Ghabriel',
    sobrenome: 'Marchesi',
    idade: 23,
  
    fala() {
      console.log(`A minha idade atual é ${this.idade}.`);
    },
  
    incrementaIdade() {
      this.idade++;
    }
};
  
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();


// function criaPessoa(nome,sobrenome,idade){
//     return {
//         nome, sobrenome, idade
//     };
// }



// const pessoa1 = criaPessoa('Ghabriel', 'Marchesi', 23)
// console.log(pessoa1)


// const pessoa1 = {
//     nome: 'Ghabriel',
//     sobrenome:'Schaivo',
//     idade: 23
// };

// console.log(pessoa1.idade)