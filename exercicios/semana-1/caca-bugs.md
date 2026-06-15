# Trecho A - Validação de Email

## Qual é o bug

A validação de email está muito simples. A função apenas verifica se existe o caractere `@` utilizando o método `includes()`. Dessa forma, qualquer texto que contenha um `@` será considerado um email válido.

## Por que está errado

A função retorna diversos falsos positivos, aceitando valores que não representam emails válidos.

Exemplos:

```javascript
"@@@@"
"usuario@"
"@gmail.com"
```

Todos esses exemplos possuem o caractere `@`, mas não seguem uma estrutura válida de email.

Além disso, a função não trata valores como `null`, `undefined` ou números.

## Como corrigir (explicação + código corrigido)

Uma forma simples de resolver o problema é utilizar uma expressão regular (Regex) para validar a estrutura mínima de um email:

* Deve existir texto antes do `@`;
* Deve existir apenas um `@`;
* Deve existir um domínio após o `@`;
* Deve existir pelo menos um ponto no domínio;
* Não deve haver espaços em branco.

Também é importante validar se o valor recebido é realmente uma string.

```javascript
function validarEmail(email) {
    if (typeof email !== "string") {
        return false;
    }

    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)+$/;

    return regex.test(email);
}
```

### Casos de teste

```javascript
console.log(validarEmail("usuario@gmail.com"));      // true
console.log(validarEmail("user@alu.ufc.br"));        // true
console.log(validarEmail("joao@empresa.com.br"));    // true

console.log(validarEmail(""));                       // false
console.log(validarEmail(" "));                      // false
console.log(validarEmail("   "));                    // false
console.log(validarEmail("joao@@gmail.com"));        // false
console.log(validarEmail("joao@gmail..com"));        // false
console.log(validarEmail("@gmail.com"));             // false
console.log(validarEmail("usuario@"));               // false
console.log(validarEmail("sem-arroba.com"));         // false
console.log(validarEmail(null));                     // false
console.log(validarEmail(undefined));                // false
console.log(validarEmail(123));                      // false
```

---

# Trecho B - Buscar item em array

## Qual é o bug

O bug está na condição do laço:

```javascript
i <= produtos.length
```

Isso faz com que o loop execute uma iteração além do necessário.

## Por que está errado

Os índices válidos de um array vão de `0` até `length - 1`.

Se um array possui tamanho 3:

```javascript
0
1
2
```

Quando o código chega em:

```javascript
i = 3
```

ele tenta acessar:

```javascript
produtos[3]
```

Essa posição não existe e retorna `undefined`.

Em seguida, o código tenta acessar:

```javascript
produtos[3].nome
```

o que gera um erro.

Outro ponto é a utilização de `==`. Embora funcione neste caso, o recomendado é utilizar `===`, pois ele compara valor e tipo.

## Como corrigir (explicação + código corrigido)

A condição correta do loop deve ser:

```javascript
i < produtos.length
```

Também foi substituído `==` por `===`.

```javascript
function buscarProduto(produtos, nome) {
    for (let i = 0; i < produtos.length; i++) {
        if (produtos[i].nome === nome) {
            return produtos[i];
        }
    }

    return null;
}
```

### Casos de teste

```javascript
console.log(buscarProduto(lista, "Calça"));
// { nome: "Calça", preco: 89.90 }

console.log(buscarProduto(lista, "Tênis"));
// { nome: "Tênis", preco: 199.90 }

console.log(buscarProduto(lista, "Boné"));
// null

console.log(buscarProduto([], "Boné"));
// null
```

---

# Trecho C - Calcular desconto

## Qual é o bug

A função não valida os valores recebidos e interpreta o desconto de forma incorreta.

## Por que está errado

O comentário informa:

```javascript
10% de desconto em R$100 = R$90
```

Mas a implementação trata o desconto como valor absoluto.

Além disso:

* Permite descontos negativos;
* Permite descontos maiores que 100%;
* Não valida o tipo dos parâmetros.

Exemplos:

```javascript
aplicarDesconto(100, 110); // preço negativo
aplicarDesconto(100, -20); // aumenta o preço
```

## Como corrigir (explicação + código corrigido)

Primeiro é necessário validar se os parâmetros são números válidos.

Depois é preciso garantir que o desconto esteja entre 0% e 100%.

```javascript
function aplicarDesconto(preco, desconto) {

    if (typeof preco !== "number" || typeof desconto !== "number") {
        return null;
    }

    if (desconto < 0 || desconto > 100) {
        return null;
    }

    return preco - (preco * desconto / 100);
}
```

### Casos de teste

```javascript
console.log(aplicarDesconto(100, 10));    // 90
console.log(aplicarDesconto(100, 50));    // 50
console.log(aplicarDesconto(100, 100));   // 0

console.log(aplicarDesconto(100, 110));   // null
console.log(aplicarDesconto(100, -20));   // null
console.log(aplicarDesconto("100", 10));  // null
console.log(aplicarDesconto(null, 10));   // null
```

---

# Trecho D - Formatação de preço

## Qual é o bug

A função assume que o valor recebido sempre será um número.

## Por que está errado

O método `toFixed()` existe apenas para valores numéricos.

Quando uma string, `null` ou `undefined` são passados para a função, o JavaScript gera um erro e interrompe a execução do programa.

Exemplo:

```javascript
formatarPreco("abc");
```

Resultado:

```text
TypeError: valor.toFixed is not a function
```

## Como corrigir (explicação + código corrigido)

Antes de utilizar `toFixed()`, é necessário validar se o valor recebido é realmente um número.

```javascript
function formatarPreco(valor) {

    if (typeof valor !== "number" || Number.isNaN(valor)) {
        return "Valor inválido";
    }

    return `R$${valor.toFixed(2)}`;
}
```

### Casos de teste

```javascript
console.log(formatarPreco(49.9));         // R$49.90
console.log(formatarPreco(100));          // R$100.00

console.log(formatarPreco("abc"));        // Valor inválido
console.log(formatarPreco(null));         // Valor inválido
console.log(formatarPreco(undefined));    // Valor inválido
console.log(formatarPreco(NaN));          // Valor inválido
console.log(formatarPreco({}));           // Valor inválido
```
