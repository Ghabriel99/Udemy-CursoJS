//Some todos os números (Reduce)
//Retorne o array com os pares (Filter)
//Retorne o array com o dobro dos valores (Map)


//Some todos os números (Reduce)
const numeros = [6, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const total = numeros.reduce(function(acumulador,valor,indice,array){
   acumulador += valor;
   return acumulador
}, 0);
console.log(total);

//Retorne o array com os pares (Filter)
const pares = numeros.filter(function(valor){
   if(valor % 2 === 0) {
      return valor;
   }
})
console.log(pares);

//Retorne o array com o dobro dos valores (Map)
const dobro = numeros.map(function(valor){
   return valor * 2;
})
console.log(dobro)

//Retorne a pessoa mais velha
const pessoas = [
   { nome: 'Eu', idade: 23},
   { nome: 'Seu madruga', idade: 88},
   { nome: 'Lucas', idade: 68},
   { nome: 'Vitoria', idade: 38},
   { nome: 'Reinaldo', idade: 48},
   { nome: 'Maria', idade: 37},
];
//Retorne a pessoa mais velha
const maisVelha = pessoas.reduce(function(acumulador,valor){
   if(acumulador.idade > valor.idade) return acumulador;
   return valor;
})
console.log(maisVelha)