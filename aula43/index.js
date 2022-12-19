//Escreva uma funçao que receba um número e retorne:
//Divisível por 3 = Fizz
//Divisível por 5 = Buzz
//Divisível por 3 e 5 = FizzBuzz
//Não divisível por 3 e 5, retorne o próprio numero
//Numeros entre 0 e 100

function fizzBuz (n) {
    if (typeof n !== 'number') return n;
    if (n % 3 === 0 && n % 5 === 0) return 'FizzBuzz';
    if (n % 3 === 0) return 'Fizz';
    if (n % 5 === 0) return 'Buzz';
    return n;
}

for (let i =0; i <= 100; i++) {
    console.log(i, fizzBuz (i))
}