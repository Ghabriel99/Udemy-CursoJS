//               -5       -4       -3         -2        -1
//                0        1        2          3         4
const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];

// Unshift
// nomes.splice(índice atual, delete, elem1, elem2, elem3);
nomes.splice(1, 0, 'ghabriel', 'gh');
console.log(nomes);

// simulando o POP
const removidos = nomes.splice(-1, 1);
console.log(removidos);

// simulando o SHIFT
const removidos2 = nomes.splice(0, 1);
console.log(removidos2);