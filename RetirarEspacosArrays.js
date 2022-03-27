
// Retirar espaços dos arrays
function noSpace(array){
let soma = ''
for (let i = 0; i < array.length; i++) {
if (array[i] !== ' '){
    soma = soma + array[i]
  }
}
return soma
}
