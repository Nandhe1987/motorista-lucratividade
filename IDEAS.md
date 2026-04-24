# Ideias de Design - Calculadora de Lucratividade para Motoristas

## Resposta 1: Minimalismo Corporativo com Foco em Dados
**Probabilidade: 0.08**

### Design Movement
Minimalismo corporativo com influências de dashboards financeiros modernos (estilo Bloomberg Terminal atualizado)

### Core Principles
- Clareza absoluta: cada elemento tem propósito específico
- Hierarquia visual forte: dados críticos em destaque imediato
- Eficiência cognitiva: reduzir ruído visual para máxima concentração
- Precisão: tipografia monoespacial para números, sans-serif limpa para labels

### Color Philosophy
- **Fundo**: Cinza muito escuro (quase preto) `#0a0e27` para reduzir fadiga ocular
- **Acentos principais**: Verde vibrante `#10b981` para lucro, Vermelho `#ef4444` para custos
- **Neutros**: Cinza claro `#e5e7eb` para texto, `#6b7280` para labels secundários
- **Intenção**: Contraste máximo para leitura rápida de números, cores semânticas (verde/vermelho) para decisões rápidas

### Layout Paradigm
- Grid assimétrico com 2 colunas: inputs à esquerda (mais estreita), resultados à direita (mais larga)
- Cards empilhados verticalmente com bordas sutis
- Tabela resumo como seção separada com scroll horizontal em mobile
- Sem muita decoração visual, foco em estrutura clara

### Signature Elements
1. **Indicadores numéricos grandes**: Números em tamanho XL com unidade em tamanho menor abaixo
2. **Badges de status**: Pequenas tags coloridas (verde/vermelho) indicando se resultado é positivo/negativo
3. **Linhas divisórias sutis**: Separadores em cinza muito escuro para organizar seções sem poluição visual

### Interaction Philosophy
- Inputs com feedback imediato (cálculos em tempo real)
- Hover sutil: mudança de fundo em 50ms
- Focus rings claros para acessibilidade
- Sem animações desnecessárias, apenas transições suaves (200ms)

### Animation
- Transições de valores numéricos: animação de contagem de 300ms quando valores mudam
- Fade-in suave (200ms) de cards ao carregar
- Hover em inputs: borda fica mais brilhante, sem mudança de cor de fundo
- Nenhuma animação decorativa, apenas feedback funcional

### Typography System
- **Display (títulos principais)**: IBM Plex Mono Bold, 28px, `#e5e7eb`
- **Heading (títulos de seção)**: IBM Plex Mono SemiBold, 16px, `#9ca3af`
- **Body (labels e texto)**: IBM Plex Mono Regular, 14px, `#d1d5db`
- **Numbers (valores)**: IBM Plex Mono Bold, 24px, `#10b981` (lucro) ou `#ef4444` (custo)
- **Caption (unidades)**: IBM Plex Mono Regular, 12px, `#6b7280`

---

## Resposta 2: Dark Mode Moderno com Glassmorphism
**Probabilidade: 0.07**

### Design Movement
Glassmorphism contemporâneo com influências de design de aplicativos mobile premium (iOS/Android 2024)

### Core Principles
- Transparência e profundidade: camadas visuais com blur e opacidade
- Suavidade: cantos arredondados generosos, sem ângulos duros
- Modernidade: uso de backdrop-filter e gradientes sutis
- Acessibilidade: contraste mantido mesmo com transparência

### Color Philosophy
- **Fundo base**: Gradiente sutil de azul muito escuro `#0f172a` a roxo escuro `#1e1b4b`
- **Cards**: Vidro semitransparente com `rgba(255,255,255,0.05)` + backdrop blur
- **Acentos**: Verde luminoso `#4ade80` para lucro, Laranja `#fb923c` para custos
- **Texto**: Branco com opacidade variável (`#ffffff` 100% para primário, 70% para secundário)
- **Intenção**: Sensação de profundidade e modernidade, cores quentes para ação

### Layout Paradigm
- Cards flutuantes com espaçamento generoso (gap 24px)
- Inputs em cards separados com glassmorphism
- Resultados em cards maiores com destaque visual
- Tabela com rows alternadas com transparência diferente
- Layout em cascata (não grid rígido) para sensação orgânica

### Signature Elements
1. **Cards com glassmorphism**: Fundo semitransparente com border de 1px em branco 10%
2. **Ícones com glow**: Ícones de lucro/custo com sombra colorida suave
3. **Gradientes de fundo**: Cada card tem gradiente sutil diferente (azul, roxo, verde)

### Interaction Philosophy
- Hover em cards: aumenta opacidade de fundo de 5% para 8%, borda fica mais visível
- Inputs com focus: glow colorido ao redor (cor do accent)
- Clique em valores: cópia para clipboard com toast de confirmação
- Smooth scroll em tabelas

### Animation
- Entrance: cards entram com fade + slide up (400ms, ease-out)
- Hover: mudança de opacidade com 150ms
- Valores numéricos: animação de contagem com easing cubic-bezier
- Glow effect: pulsação suave em números de lucro (1.5s loop)

### Typography System
- **Display (títulos)**: Poppins Bold, 32px, `#ffffff`
- **Heading (seções)**: Poppins SemiBold, 18px, `#e0e7ff`
- **Body (labels)**: Inter Regular, 14px, `#a0aec0`
- **Numbers (valores)**: Poppins Bold, 28px, `#4ade80` (lucro) ou `#fb923c` (custo)
- **Caption**: Inter Regular, 12px, `#64748b`

---

## Resposta 3: Design Funcional com Ênfase em Educação
**Probabilidade: 0.09**

### Design Movement
Design educacional com influências de ferramentas de planejamento financeiro pessoal (Mint, YNAB)

### Core Principles
- Transparência: explicar cada cálculo com tooltips e labels descritivos
- Progressão: guiar o usuário do simples (inputs) ao complexo (análise)
- Confiança: mostrar origem de cada número, permitir edição de custos padrão
- Engajamento: usar microcopy para educar enquanto calcula

### Color Philosophy
- **Fundo**: Cinza neutro escuro `#1a1a1a` com textura sutil
- **Primário**: Azul confiável `#3b82f6` para ações principais
- **Sucesso**: Verde `#22c55e` para lucro e metas atingidas
- **Alerta**: Amarelo `#eab308` para pontos de atenção
- **Erro**: Vermelho `#ef4444` para custos e prejuízos
- **Intenção**: Cores semânticas claras, educação através da cor

### Layout Paradigm
- Seções bem definidas: "Configuração", "Custos", "Resultados", "Análise"
- Cards com headers descritivos e ícones
- Sidebar com resumo rápido (mobile: colapsável)
- Tabela com explicações inline (hover mostra tooltips)
- Espaçamento generoso entre seções (gap 32px)

### Signature Elements
1. **Ícones informativos**: Cada seção tem ícone + descrição breve
2. **Tooltips explicativos**: Hover em labels mostra explicação do cálculo
3. **Badges informativos**: "Padrão", "Editável", "Calculado" para indicar tipo de valor

### Interaction Philosophy
- Inputs com labels descritivos e placeholders educacionais
- Hover em números mostra origem do cálculo
- Clique em "?" abre modal com explicação detalhada
- Edição de custos padrão com confirmação visual
- Undo/Reset para voltar aos padrões

### Animation
- Entrada de seções: fade + slide left (300ms)
- Hover em cards: elevação sutil (shadow aumenta)
- Transição de valores: animação suave com contador visual
- Tooltips: fade in 150ms, fade out 100ms

### Typography System
- **Display (título principal)**: Playfair Display Bold, 36px, `#ffffff`
- **Heading (seções)**: Playfair Display SemiBold, 20px, `#e0e0e0`
- **Body (labels)**: Roboto Regular, 14px, `#b0b0b0`
- **Numbers (valores)**: Roboto Mono Bold, 26px, `#22c55e` (lucro) ou `#ef4444` (custo)
- **Caption (explicações)**: Roboto Regular, 12px, `#808080`
- **Microcopy (dicas)**: Roboto Italic, 12px, `#606060`

---

## Decisão: Abordagem Selecionada

**Escolha: Resposta 2 - Dark Mode Moderno com Glassmorphism**

Esta abordagem oferece o melhor equilíbrio entre:
- **Modernidade**: Glassmorphism é tendência 2024, transmite profissionalismo
- **Usabilidade**: Cores semânticas claras (verde/laranja) facilitam decisões rápidas
- **Acessibilidade**: Contraste mantido mesmo com transparência
- **Engajamento**: Animações suaves e glow effects tornam a experiência agradável
- **Responsividade**: Layout em cascata adapta-se naturalmente a mobile

### Implementação
- Fundo com gradiente azul-roxo
- Cards com glassmorphism (backdrop blur + transparência)
- Tipografia Poppins + Inter para modernidade
- Animações de entrada e hover para feedback visual
- Ícones com glow para destaque de valores críticos
