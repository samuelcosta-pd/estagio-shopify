# Semana 3 — Sections com Blocos e Metafields

## Objetivo
Criar sections avançadas com blocos configuráveis no editor do Shopify
e integrar metafields de produto para exibir informações dinâmicas.

## Estrutura

```
semana-3/
├── desafio3.1/
│   └── hero-banner.liquid          ← hero banner com blocos (título, parágrafo, botão, imagem)
└── desafio3.2/
    ├── product-extra-info.liquid   ← informações extras via metafields do produto
    └── brand-info.liquid           ← informações da marca via metaobjects
```

## Como integrar ao tema

1. Copie os arquivos `.liquid` para `hexa-store/sections/`:
   - `desafio3.1/hero-banner.liquid`
   - `desafio3.2/product-extra-info.liquid`
   - `desafio3.2/brand-info.liquid`
2. Para `product-extra-info.liquid` e `brand-info.liquid`: configure os metafields
   no painel Shopify Admin antes de testar.
3. Adicione o `hero-banner` à home via editor ou `hexa-store/templates/index.json`.

> **Atenção:** esta pasta representa o estado ao final da semana 3.
> Se arquivos desta semana forem modificados em semanas futuras, a versão
> atualizada aparecerá na pasta da semana correspondente — isso é intencional
> e preserva a evolução ao longo do curso.
> O tema funcional completo está em `hexa-store/`.
