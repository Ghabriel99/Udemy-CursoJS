// Dobre o valor de todos os numeros
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numerosEmDobro = numeros.map(valor => valor * 2)

console.log(numerosEmDobro);

const pessoas = [
   { nome: 'Eu', idade: 23},
   { nome: 'Seu madruga', idade: 88},
   { nome: 'Lucas', idade: 68},
   { nome: 'Vitoria', idade: 38},
   { nome: 'Reinaldo', idade: 48},
   { nome: 'Maria', idade: 37},
];

//Retorne apenas uma string com o nome da pessoa
const nomes = pessoas.map(obj => obj.nome)
console.log(nomes);

//Remova apenas a chave "nome" do objeto
const idades = pessoas.map(obj => ({ idade: obj.idade}))
console.log(idades);


// Adicione uma chave id em cada objeto
const comIds = pessoas.map(function(obj, indice) {
   const newObj = {...obj};
   newObj.id = indice;
   return newObj 
})

console.log(comIds)
console.log(pessoas)