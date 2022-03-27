function trocaVogais(string) {
let palavra = ""
for (i = 0; i < string.length; i++){
    if (string[i] == "a" || string[i] == "e" || string[i] == "i" || string[i] == "o" || string[i] == "u"){
        palavra += "1"
    }
    else {
        palavra += string[i]
    }
}
return palavra
}
