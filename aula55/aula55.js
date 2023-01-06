// IIFE Immediatly Involked f=Fumction    

(function(idade, peso, altura) {

   const sobrenome = 'GH'
   function criaNome(nome) {
      return nome + " - " + sobrenome;
   }

   function falaNome() {
      console.log(criaNome('Ghabriel'));
   }
   falaNome();
   console.log(idade, peso, altura);
})(23, 90, 1.90);