# Semana 4 — Otimização de Performance e Refatoração

## Objetivo
Otimizar a performance do tema Shopify e refatorar as seções, garantindo melhores pontuações no Lighthouse, organizando CSS para que ele carregue apenas quando necessário (lazy loading), padronizando a grid de produtos e criando novas seções interativas.

## Estrutura de Arquivos

```
semana-4/
├── assets/
│   ├── component-product-card.css          ← Estilos modulares isolados para o cartão do produto
│   ├── section-countdown-timer.css         ← CSS específico do temporizador
│   ├── section-product-extra-info.css      ← CSS para as informações extras de produto
│   └── section-world-cup-predictions.css   ← CSS da seção de previsões/bolão
├── sections/
│   ├── countdown-timer.liquid              ← Nova seção de contagem regressiva promocional
│   ├── exercicio-filtros.liquid            ← Filtros atualizados e otimizados
│   ├── exercicio-liquid-basico.liquid      ← Seção refatorada para performance
│   ├── exercicio-product-grid.liquid       ← Grid de produtos responsiva e otimizada
│   ├── hero-banner.liquid                  ← Hero banner com estilos ajustados para LCP
│   ├── product-extra-info.liquid           ← Extra info refatorado para uso modular de CSS
│   └── world-cup-predictions.liquid        ← Nova seção interativa de previsões
├── snippets/
│   └── product-card.liquid                 ← Snippet padronizado do cartão do produto
└── templates/
    └── index.json                          ← Template da home page atualizado para as novas seções
```

## Arquitetura e Pontos Importantes

1. **Separação de CSS (Modularização):** 
   Um pilar da semana 4 foi desacoplar o CSS de uso global, transferindo o CSS diretamente para os componentes correspondentes. Isso garante o carregamento sob demanda:
   - `{{ 'component-product-card.css' | asset_url | stylesheet_tag }}` passou a ser importado de forma modular no próprio componente.
   - A mesma prática foi espelhada em `countdown-timer`, `product-extra-info` e `world-cup-predictions`.

2. **Otimização de Performance e Core Web Vitals:**
   - Prevenção do *Cumulative Layout Shift* (CLS) com a declaração estrita de dimensões nas tags de imagem.
   - Refatoração dos laços `for` (limites e paginação) para evitar sobrecarga no tempo de execução do Liquid.
   - Ajustes de `srcset` e carregamento assíncrono (lazy loading) nas imagens que estão fora da dobra (*above the fold*).

3. **Inclusão de Novas Funcionalidades:**
   - Adicionada seção de *Countdown Timer* para explorar gatilhos de urgência e vendas.
   - Adicionada seção inovadora de *World Cup Predictions*, trabalhando com lógicas avançadas de interface de usuário.

## Como integrar ao tema

1. Copie o conteúdo para dentro de `hexa-store/`:
   - Arquivos `.css` para a pasta `assets/`.
   - Arquivos `.liquid` das seções para a pasta `sections/`.
   - `product-card.liquid` para `snippets/`.
   - `index.json` para `templates/`.
2. Configure as seções via Shopify Theme Editor.

> **Atenção:** esta pasta representa o estado da arte e refatorações realizadas na semana 4.
> O projeto Shopify funcional centralizando todas as semanas se mantém no diretório raiz do ambiente (`hexa-store/`).
