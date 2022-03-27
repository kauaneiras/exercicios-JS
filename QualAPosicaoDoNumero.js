// Qual a posição do maior número
function maiorIndice(lista) {
indice = 0
for(i = 0; i < lista.length; i++){
    if(lista[indice] < lista[i]){
      indice = i
    }    
  }
  return indice
}
