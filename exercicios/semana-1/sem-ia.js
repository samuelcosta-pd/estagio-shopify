// Medi o tempo cronometrando em cada questão. Tempo total SEM IA: 20min e 31s;

// a) inverterString(str)
// Recebe uma string e retorna ela invertida.
// Exemplo: "hello" → "olleh"
// Exemplo: "Shopify" → "yfipohS"

function inverterString(str) {
    return str.split('').reverse().join('');
}

console.log(inverterString("Brasil campeão"));

//tempo 5min e 24s;

// b) contarVogais(str)
// Recebe uma string e retorna a quantidade de vogais (a, e, i, o, u).
// Deve funcionar com maiúsculas e minúsculas.
// Exemplo: "programacao" → 5
// Exemplo: "Shopify" → 2

function contarVogais(str) { 
    const count = str.match(/[aeiouaeiouáéíóúãõâêîôûàèìòùü]/gi).length;
    return count;
}

console.log(contarVogais("FortAlEza CEará"));

//tempo 7min e 34s;

// c) encontrarMaior(numeros)
// Recebe um array de números e retorna o maior valor.
// Exemplo: [3, 7, 2, 9, 1] → 9
// Exemplo: [10, 10, 10] → 10

function encontrarMaior(numeros) {
    return Math.max(...numeros);
}

console.log(encontrarMaior([1,2,3,4,5]));

//tempo 2min e 39s;


// d) removerDuplicatas(array)
// Recebe um array e retorna um novo array sem valores duplicados.
// Exemplo: [1, 2, 2, 3, 3, 4] → [1, 2, 3, 4]
// Exemplo: ["a", "b", "a", "c"] → ["a", "b", "c"]

function removerDuplicatas(array) {
    var dicionario = {};
    for (var i = 0; i < array.length; i++) {
        dicionario[array[i] + ""] = true;
    }
    var newArray = [];
    for (var chave in dicionario) {
        newArray.push(chave);
    }
    return newArray;
}

console.log(removerDuplicatas([1,2,2,4,5,7,7,8,9,10]))

//tempo 4min e 54s;

// Tempo total SEM IA: 20min e 31s;

