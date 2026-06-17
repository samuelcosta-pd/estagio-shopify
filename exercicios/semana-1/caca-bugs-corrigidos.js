/**
 * Trecho A - Validação de Email
 *
 * Correções:
 * - Verifica se o valor recebido é uma string.
 * - Utiliza Regex para validar a estrutura de um email.
 * - Evita falsos positivos.
 */
function validarEmail(email) {
    if (typeof email !== "string") {
        return false;
    }

    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)+$/;

    return regex.test(email);
}

/**
 * Trecho B - Buscar item em array
 *
 * Correções:
 * - Utiliza i < produtos.length para evitar acessar posições além do necessário.
 * - Utiliza comparação por melhores práticas (===).
 * - Valida se produtos é realmente um array.
 * - Valida se o nome informado é uma string.
 */
function buscarProduto(produtos, nome) {
    if (!Array.isArray(produtos) || typeof nome !== "string") {
        return null;
    }

    for (let i = 0; i < produtos.length; i++) {
        if (produtos[i]?.nome === nome) {
            return produtos[i];
        }
    }

    return null;
}

/**
 * Trecho C - Calcular desconto
 *
 * Correções:
 * - Valida se preço e desconto são números.
 * - valida se descontos são negativos e se estão acima de 100.
 * - Calcula desconto percentual da forma certa.
 */
function aplicarDesconto(preco, desconto) {
    if (typeof preco !== "number" || typeof desconto !== "number") {
        return null;
    }

    if (Number.isNaN(preco) || Number.isNaN(desconto)) {
        return null;
    }

    if (desconto < 0 || desconto > 100) {
        return null;
    }

    return preco - (preco * desconto / 100);
}

/**
 * Trecho D - Formatação de preço
 *
 * Correções:
 * - Verifica se o valor recebido é um número.
 * - Trata o NaN.
 * - Evita erro ao chamar toFixed() em tipos inválidos.
 */
function formatarPreco(valor) {
    if (typeof valor !== "number" || Number.isNaN(valor)) {
        return "Valor inválido";
    }

    return `R$${valor.toFixed(2)}`;
}

/* ==================================================
   TESTES
================================================== */

console.log("=== validarEmail ===");
console.log(validarEmail("usuario@gmail.com"));   // true
console.log(validarEmail("user@alu.ufc.br"));     // true
console.log(validarEmail("joao@@gmail.com"));     // false
console.log(validarEmail(null));                  // false
console.log(validarEmail(123));                   // false

const lista = [
    { nome: "Camiseta", preco: 49.90 },
    { nome: "Calça", preco: 89.90 },
    { nome: "Tênis", preco: 199.90 }
];

console.log("\n=== buscarProduto ===");
console.log(buscarProduto(lista, "Calça"));
console.log(buscarProduto(lista, "Boné"));
console.log(buscarProduto([], "Boné"));

console.log("\n=== aplicarDesconto ===");
console.log(aplicarDesconto(100, 10));    // 90
console.log(aplicarDesconto(100, 50));    // 50
console.log(aplicarDesconto(100, 110));   // null
console.log(aplicarDesconto(100, -20));   // null

console.log("\n=== formatarPreco ===");
console.log(formatarPreco(49.9));         // R$49.90
console.log(formatarPreco(100));          // R$100.00
console.log(formatarPreco("abc"));        // Valor inválido
console.log(formatarPreco(null));         // Valor inválido
console.log(formatarPreco(NaN));          // Valor inválido