// Medi o tempo cronometrando em cada questão, os comentários também foram considerados no tempo. Tempo total COM IA: 47s;

// Função que inverte uma string
// Exemplo: "hello" → "olleh"

function inverterString(str) {
    return str.split('').reverse().join('');
}

console.log(inverterString("Brasil campeão"));

//tempo 8s;

// Função que conta as vogais em uma string (maiúsculas e minúsculas)
// Exemplo: "programacao" → 5

//Escreva uma função que conta as vogais em uma string considerando tanto maiúsculas quanto minúsculas. A função deve retornar o número total de vogais presentes na string. Considerando as vogais com acentos e sem acentos (a, e, i, o, u, á, é, í, ó, ú, ã, õ, â, ê, î, ô, û, à, è, ì, ò, ù).

function contarVogais(str) { 
    const count = str.match(/[aeiouaeiouáéíóúãõâêîôûàèìòùü]/gi).length;
    return count;
}

console.log(contarVogais("FortAlEza CEará"));

//tempo 7s;

// Função que encontra o maior número em um array
// Exemplo: [3, 7, 2, 9, 1] → 9

// Escreva uma função que recebe um array de números e retorna o maior valor presente nesse array. A função deve ser capaz de lidar com arrays de qualquer tamanho e deve retornar o maior número encontrado.

function encontrarMaior(numeros) {
    return Math.max(...numeros);
}

console.log(encontrarMaior([1,2,3,4,5]));

//tempo 4s;

// Função que remove valores duplicados de um array
// Exemplo: [1, 2, 2, 3, 3, 4] → [1, 2, 3, 4]

//Escreva uma função que recebe um array e retorna um novo array contendo apenas os valores únicos, ou seja, sem duplicatas. A função deve ser capaz de lidar com arrays de qualquer tipo de dados (números, strings, etc.) e deve preservar a ordem dos elementos originais.

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

console.log(removerDuplicatas([1, 2, 2, 3, 3, 4]));

//tempo 28s;

// Tempo total COM IA: 47s