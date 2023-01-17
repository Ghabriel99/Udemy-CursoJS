// Filter -> Sempre retornar um array, com a mesma quantidade de elementos ou menos.

//Retorne os números maiores que 10 do array

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numerosFiltrados = numeros.filter(valor => valor > 10);
console.log(numerosFiltrados)

//Retorne as pessoas que tem o nome com 5 letras ou mais 
//Retorne as pessoas com mais de 50 anos 

const pessoas = [
    { nome: 'Eu', idade: 23},
    { nome: 'Seu madruga', idade: 88},
    { nome: 'Lucas', idade: 68},
    { nome: 'Vitoria', idade: 38},
    { nome: 'Reinaldo', idade: 48},
    { nome: 'Maria', idade: 37},
];

//Retorne as pessoas que tem o nome com 5 letras ou mais 
console.log('Filtrando as pessoas que tem o nome com 5 letras ou mais')
const pessoas5 = pessoas.filter(obj => obj.nome.length >=5);
console.log(pessoas5)

//Retorne as pessoas com mais de 50 anos 
console.log('Filtrando as pessoas com mais de 50 anos')
const pessoas50 = pessoas.filter(obj => obj.idade > 50);
console.log(pessoas50)

//Retorne as pessoas que o nome termina com a
console.log('Filtrando as pessoas que o nome termina com a')
const nomeComA = pessoas.filter(obj => obj.nome.toLowerCase().endsWith('a'));
console.log(nomeComA)