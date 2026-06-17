// Medi o tempo cronometrando em cada questão, os comentários também foram considerados no tempo. Tempo total COM IA: 2min e 30s com testes, 47s só com a geração de código;

// Função que inverte uma string
// Exemplo: "hello" → "olleh"

function inverterString(str) {
    return str.split('').reverse().join('');
}

console.log(inverterString("Brasil campeão"));

//crie mais edge cases para testar a função inverterString, como por exemplo, uma string vazia, ou uma string com caracteres especiais.

console.log(inverterString(""));
console.log(inverterString("!@#$%^&*()"));

//tempo 41s;

// Função que conta as vogais em uma string (maiúsculas e minúsculas)
// Exemplo: "programacao" → 5

//Escreva uma função que conta as vogais em uma string considerando tanto maiúsculas quanto minúsculas. A função deve retornar o número total de vogais presentes na string. Considerando as vogais com acentos e sem acentos (a, e, i, o, u, á, é, í, ó, ú, ã, õ, â, ê, î, ô, û, à, è, ì, ò, ù).

function contarVogais(str) { 
    const count = str.match(/[aeiouaeiouáéíóúãõâêîôûàèìòùü]/gi).length;
    return count;
}

console.log(contarVogais("FortAlEza CEará"));

//crie mais edge cases para testar a função contarVogais, como por exemplo, uma string sem vogais, ou uma string com apenas vogais.

console.log(contarVogais("bcdfghjklmnpqrstvwxyz"));
console.log(contarVogais("aeiouAEIOU"));

//tempo 26s;

// Função que encontra o maior número em um array
// Exemplo: [3, 7, 2, 9, 1] → 9

// Escreva uma função que recebe um array de números e retorna o maior valor presente nesse array. A função deve ser capaz de lidar com arrays de qualquer tamanho e deve retornar o maior número encontrado.

function encontrarMaior(numeros) {
    return Math.max(...numeros);
}

console.log(encontrarMaior([1,2,3,4,5]));

//crie mais edge cases para testar a função encontrarMaior, como por exemplo, um array com números negativos, ou um array com números decimais.

console.log(encontrarMaior([-1, -2, -3, -4, -5]));
console.log(encontrarMaior([1.5, 2.5, 3.5, 4.5, 5.5]));

//tempo 23s;

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

//crie mais edge cases para testar a função removerDuplicatas, como por exemplo, um array de strings com valores duplicados, ou um array de números com valores duplicados.

console.log(removerDuplicatas(["a", "b", "a", "c"]));
console.log(removerDuplicatas([1, 1, 2, 3, 4, 4, 5]));

//tempo 1min;

// Tempo total COM IA: 2min e 30s com testes, 47s só com a geração de código;