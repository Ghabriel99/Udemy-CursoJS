//Declaração da função (Function hoisting)

function saySomething() {

    console.log('TESTE');
}
saySomething();

// First-class objects (Objetos de primeira classe)
// Function expression

const souUmDado = function() {
    console.log('Sou um dado')
}
souUmDado();

//Arrow func
const funcaoArrow = () =>{
    console.log('Sou uma arrow func')
}
funcaoArrow();

//Inside an object
const obj = {
    say() {
        console.log('I am...')
    }
}
obj.say();