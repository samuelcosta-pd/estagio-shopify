# Semana 2 — Liquid Básico, Filtros e Snippets

## Objetivo
Criar sections Shopify do zero usando Liquid: variáveis, filtros,
condicionais e snippets reutilizáveis.

## Estrutura

```
semana-2/
├── desafio2.1/
│   └── exercicio-liquid-basico.liquid   ← section com variáveis e tags Liquid
├── desafio2.2/
│   └── exercicio-filtros.liquid         ← section com filtros e condicionais
└── desafio2.3/
    ├── exercicio-product-grid.liquid    ← grade de produtos usando snippet
    └── product-card.liquid              ← snippet reutilizável de card
```

## Como integrar ao tema

1. Copie os arquivos `.liquid` de cada desafio para as pastas correspondentes dentro de `hexa-store/`:
   - `desafio2.1/` → `hexa-store/sections/`
   - `desafio2.2/` → `hexa-store/sections/`
   - `desafio2.3/exercicio-product-grid.liquid` → `hexa-store/sections/`
   - `desafio2.3/product-card.liquid` → `hexa-store/snippets/`
2. Adicione as sections à home pelo editor do Shopify Admin ou edite `hexa-store/templates/index.json`.

> **Atenção:** esta pasta é apenas documentação dos exercícios.
> O tema funcional completo está em `hexa-store/`.
