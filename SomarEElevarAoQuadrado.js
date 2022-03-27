//Soma numeros e eleva ao quadrado
function somaDoQuadrado(numeros){
let soma = 0
for (let i = 0; i < numeros.length; i++) {
  soma = soma + (numeros[i]*numeros[i])

}
return soma
}
