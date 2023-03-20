// Super class
function Conta(agencia,conta,saldo) {
   this.agencia = agencia
   this.conta = conta
   this.saldo = saldo
}

Conta.prototype.sacar = function(valor) {
   if(valor > this.saldo) {
     console.log(`Saldo insuficiente: ${this.saldo}R$`);
     return;
   }
   this.saldo -= valor;
   this.verSaldo();
};

Conta.prototype.depositar = function (valor) {
   this.saldo += valor;
   this.verSaldo()
};

Conta.prototype.verSaldo = function () {
   console.log(`Ag/conta: ${this.agencia}/${this.conta}, tem o Saldo: ${this.saldo}R$`)
};

function ContaCorrente(agencia, conta, saldo, limite) {
   Conta.call(this, agencia, conta, saldo);
   this.limite = limite;
}

ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.prototype.constructor = ContaCorrente;

ContaCorrente.prototype.sacar = function (valor) {
   if(valor > (this.saldo + this.limite)) {
      console.log(`Saldo insuficiente: ${this.saldo}R$`)
      return;
   } 
   this.saldo -= valor;
   this.verSaldo()
};

function ContaPoupanca(agencia,conta,saldo,) {
   Conta.call(this, agencia, conta, saldo)
}
ContaPoupanca.prototype = Object.create(Conta.prototype);
ContaPoupanca.prototype.constructor = ContaPoupanca;

console.log('Conta Corrente')
const cc = new ContaCorrente(11, 22, 0, 100)
cc.depositar(10)
cc.sacar(110)
cc.sacar(10)

console.log()

console.log('Conta Poupanca')
const cp = new ContaPoupanca(12, 30, 0,)
cp.depositar(10)
cp.sacar(10)
cp.sacar(12)