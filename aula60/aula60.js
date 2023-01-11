//Funções recursivas (é simplesmente uma função que se chama de volta de acordo com o parametro programado)

function recursiva(max) {
   console.log(max) 

   if(max >= 10) return;
   max ++;
   
   recursiva(max)
}
recursiva(0)