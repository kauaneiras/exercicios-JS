// função peço desconto ou não
function pecoDesconto(preco, estaComDesconto) {
  if (preco > 100 && estaComDesconto == false) {
    return "Quero pechinchar"
  }
  else { 
    return "Negócio fechado"
  }
}
