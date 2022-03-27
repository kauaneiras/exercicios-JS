function somaArray(lista) {
let soma = 0
for (let i = 0; i < lista.length; i++) {
    soma = soma + lista[i]
  }
return soma
}
console.log(somaArray([1, 4, -5, 2, 50, 30, 20, 283]))
