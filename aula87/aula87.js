function rand(min,max) {
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

function requestPage() {
   const emCache = false;

   if(emCache) {
      return Promise.resolve('Página em cache')
   } else {
      return wait('Baixei a página ')
   }
}

requestPage()
   .then(dadosPagina => {
      console.log(dadosPagina)
   })
   .catch(e => console.log('ERRO', e))
;

