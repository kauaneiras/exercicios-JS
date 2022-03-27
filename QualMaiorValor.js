// Qual o maior Valor
function maiorIndice(lista) {
maiorValor = 0
for(i = 0; i < lista.length; i++){
    if(maiorValor < lista[i]){
        maiorValor = lista[i]
    }    
}
  return "o maior valor é o " + maiorValor
}
