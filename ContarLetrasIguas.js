function contaLetras(string, letra) {
let quantidade = 0;

for (let i = 0; i < string.length; i++) {
	if (string[i] === letra) {
		quantidade++;
		}
	}
	return quantidade
}
