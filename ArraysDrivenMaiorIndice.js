// ex3
function maiorIndice(lista) {
    let indice = 0;
    for (i = 0; i < lista.length; i++) {
        if (lista[i] > lista[indice]) {
            indice = i;
        }
    }
    return indice
}
