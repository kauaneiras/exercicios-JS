//Encontrar a agulha 
function encontrarAgulha(array){
let palavra = "agulha"
for (let i = 0; i < array.length; i++) {
  let posicao = i
  if(palavra === array[i]){
    return "Encontrei a agulha na posição " + posicao
  }
}
}
