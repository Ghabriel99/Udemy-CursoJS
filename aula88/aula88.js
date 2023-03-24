function rand(min=0,max=3) {
   min *= 1000;
   max *= 1000;
   return Math.floor(Math.random() * (max - min) + min)
}
// Promisses -> .all, .race, .resolve, .reject
function wait(msg,time) {
   return new Promise((resolve, reject) => {
      setTimeout(() => {
         if (typeof msg !== 'string') {
            reject('CAI NO ERRO')
            return;
         }
      
         resolve(msg.toUpperCase() + ' - Passei na promisse')
         return;

      }, time)
   })
}
// async permite usar await dentro de uma função, esperarando uma promisse ser finalizada
async function execute() {
   try {
      const fase1 = await wait('Fase 1', 1200)
      console.log(fase1)

      setTimeout(function() {
         console.log('Essa promisse estava pendente', fase1)
      }, 1200)

      const fase2 = await wait('Fase 2', rand());
      console.log(fase2)

      const fase3 = await wait('Fase 3', rand());
      console.log(fase3)

      console.log('Terminamos na fase:', fase3)
   } catch(e) {
      console.log(e)
   }
}
execute()

//peding -> pendente
//fullfiled -> resolvida
//rejected -> rejeita