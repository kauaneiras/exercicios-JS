function ehPalindromo (string) {
  const reverso = string.split('').reverse().join('');

  if (string === reverso) {
    return "sim";
  } else {
    return "não";
  }
  }
