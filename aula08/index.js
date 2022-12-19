const nome = "Ghabriel"
const sobrenome = "Marchesi Schiavo"
const idade = 23
const peso = 80
const alturaEmM = 1.90
const cidade = "Londrina - PR"

let nascimento = 2022 - idade

let imc = peso / (alturaEmM * alturaEmM)

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg, tem ${alturaEmM} de altura e seu IMC é de ${imc} .`)

console.log(`${nome} nasceu em ${nascimento} na cidade de ${cidade}.`)
