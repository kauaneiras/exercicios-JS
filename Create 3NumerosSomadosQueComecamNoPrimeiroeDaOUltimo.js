function somaAteMeta(inicio, meta) {
  let numeros = [];
	let soma = 0;

  for (let i = inicio + 1; soma < meta; i++) {
    numeros.push(i);
    soma += i;
  }

	return numeros;
}
