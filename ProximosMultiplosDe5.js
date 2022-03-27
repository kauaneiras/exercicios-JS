function proximosMultiplosDe5(valorInicial, quantidade) {
  let valorFinal = [];
  let multiplo5 = Math.ceil(valorInicial / 5) * 5;

  for (let i = 0; i < quantidade; i++) {
    valorFinal.push(multiplo5 + (i * 5))
  }

  return valorFinal;
}

console.log(proximosMultiplosDe5(4, 2)); // saída: [15,20,25]
