# 🚗 Calculadora de Lucratividade para Motoristas de Aplicativo

Uma aplicação web moderna e responsiva para análise completa de custos e rentabilidade de motoristas de aplicativo (Uber, 99, Loggi, etc). Com design Dark Mode elegante e interface intuitiva, permite calcular em tempo real quanto você precisa ganhar por km para atingir sua meta de salário mensal.

## ✨ Funcionalidades Principais

- **📊 Cálculos em Tempo Real**: Todos os valores atualizam instantaneamente conforme você ajusta os inputs
- **🎯 Simulação de Cenários**: Teste diferentes combinações de custos e ganhos para encontrar a melhor estratégia
- **📱 Design Responsivo**: Funciona perfeitamente em mobile, tablet e desktop
- **🎨 Interface Dark Mode**: Design moderno com Glassmorphism para melhor experiência visual
- **✏️ Custos Totalmente Editáveis**: Customize gasolina, manutenção, depreciação, limpeza e custos fixos
- **💰 Resumo de Ação Prático**: Mostra claramente quanto você precisa rodar e qual valor mínimo por km aceitar
- **📈 Tabela Detalhada**: Breakdown completo de todos os custos e cálculos
- **🔄 Cálculo Automático**: O faturamento necessário é calculado automaticamente baseado na sua meta

## 🎯 Como Funciona

### Entradas (Inputs)
1. **Configuração Básica**
   - Preço da gasolina (padrão: R$ 6,69/L)
   - Consumo médio do veículo (padrão: 11,1 km/L)
   - KM total rodado no mês (padrão: 5.000 km)

2. **Meta Financeira**
   - Salário limpo desejado (quanto você quer ganhar por mês)

3. **Custos Mensais** (editáveis)
   - IPVA/Seguro: R$ 241,41/mês
   - Manutenção/Pneus: R$ 0,07/km
   - Limpeza: R$ 320,00/mês
   - Depreciação: R$ 0,07/km

### Saídas (Resultados)
- **Valor Mínimo por KM (Rebú)**: O valor que você deve aceitar no app para atingir sua meta
- **Custos Totais Mensais**: Soma de todos os custos
- **Custo Total por KM**: Custo operacional por quilômetro
- **Faturamento Necessário**: Quanto você precisa faturar para ganhar sua meta
- **Ponto de Equilíbrio**: Faturamento mínimo para não ter prejuízo
- **Resumo de Ação**: Recomendação clara e prática

## 🚀 Exemplo de Uso

Você quer ganhar **R$ 3.000/mês** rodando **3.000 km**:

1. Defina salário desejado: R$ 3.000
2. Defina km rodado: 3.000
3. O app calcula automaticamente:
   - **Custos totais**: R$ 2.789,52
   - **Faturamento necessário**: R$ 5.789,52
   - **Valor mínimo por km**: R$ 1,93/km
   - **Recomendação**: Recuse corridas abaixo de R$ 1,93/km

## 🛠️ Stack Tecnológico

- **Frontend**: React 19 + TypeScript
- **Styling**: Tailwind CSS 4 + Glassmorphism
- **UI Components**: shadcn/ui
- **Build Tool**: Vite
- **Routing**: Wouter
- **Icons**: Lucide React
- **Package Manager**: pnpm

## 📦 Instalação

### Pré-requisitos
- Node.js 18+
- pnpm (ou npm/yarn)

### Passos

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/motorista-lucratividade.git
cd motorista-lucratividade

# Instale as dependências
pnpm install

# Inicie o servidor de desenvolvimento
pnpm dev
```

O app estará disponível em `http://localhost:3000`

## 🏗️ Estrutura do Projeto

```
motorista-lucratividade/
├── client/
│   ├── public/              # Arquivos estáticos
│   ├── src/
│   │   ├── components/      # Componentes reutilizáveis
│   │   ├── contexts/        # React contexts
│   │   ├── hooks/           # Custom hooks
│   │   ├── lib/             # Utilitários
│   │   ├── pages/           # Páginas da aplicação
│   │   ├── App.tsx          # Componente raiz
│   │   ├── main.tsx         # Entry point
│   │   └── index.css        # Estilos globais
│   └── index.html           # HTML principal
├── server/                  # Servidor Express (placeholder)
├── shared/                  # Código compartilhado
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## 🎨 Design Philosophy

O projeto utiliza **Dark Mode Glassmorphism** com as seguintes características:

- **Fundo**: Gradiente azul-roxo escuro (0f172a → 1e1b4b)
- **Cards**: Glassmorphism com backdrop blur e transparência
- **Cores Semânticas**:
  - Verde (#4ade80): Lucro e valores positivos
  - Laranja (#fb923c): Custos operacionais
  - Vermelho (#ef4444): Custos totais e perdas
  - Azul (#3b82f6): Metas e informações principais
- **Tipografia**: Poppins (títulos) + Inter (corpo)
- **Animações**: Transições suaves e glow effects

## 💡 Dicas de Uso

### Modo Flexível vs Modo Lucro
Baseado na análise do ChatGPT, recomenda-se:

- **Modo Flexível** (R$ 1,70–1,90/km): Use no início do dia para não ficar parado
- **Modo Lucro** (R$ 2,00+/km): Seu padrão de trabalho onde você realmente ganha

### Ajustando Custos Realistas
Os custos padrão são baseados em um Prisma 2014. Ajuste conforme sua realidade:

1. Clique em "Editar" na seção Custos Mensais
2. Aumente depreciação se seu carro é mais novo
3. Aumente manutenção conforme seu histórico
4. Salve e veja o impacto nos cálculos

## 📊 Cálculos Implementados

### Custo de Combustível
```
Custo/km = Preço da Gasolina ÷ Consumo Médio
Custo Total = Custo/km × KM Rodado
```

### Custos Totais Mensais
```
Total = IPVA/Seguro + Combustível + Manutenção + Limpeza + Depreciação
```

### Custo Total por KM
```
Custo/km = Custos Totais Mensais ÷ KM Rodado
```

### Faturamento Necessário
```
Faturamento = Salário Desejado + Custos Totais
```

### Valor Mínimo por KM
```
Rebú = Faturamento Necessário ÷ KM Rodado
```

## 🔧 Desenvolvimento

### Scripts Disponíveis

```bash
# Inicia o servidor de desenvolvimento
pnpm dev

# Build para produção
pnpm build

# Preview do build
pnpm preview

# Verifica tipos TypeScript
pnpm check

# Formata código
pnpm format
```

## 📱 Responsividade

O projeto é totalmente responsivo:

- **Mobile** (< 640px): Layout em coluna única
- **Tablet** (640px - 1024px): Layout adaptado
- **Desktop** (> 1024px): Layout em 3 colunas (inputs, resultados, tabela)

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se livre para:

1. Fazer um fork do projeto
2. Criar uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abrir um Pull Request

## 📝 Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo LICENSE para detalhes.

## 🙋 Suporte

Se tiver dúvidas ou encontrar problemas:

1. Verifique se os dados inseridos estão corretos
2. Tente editar os custos para valores mais realistas
3. Abra uma issue no GitHub com detalhes do problema

## 🎓 Inspiração

Este projeto foi desenvolvido com base em análises reais de lucratividade de motoristas de aplicativo, considerando:

- Custos fixos (IPVA, seguro)
- Custos variáveis (combustível, manutenção, pneus)
- Depreciação do veículo
- Metas de ganho realistas

## 🚀 Próximas Melhorias

- [ ] Histórico de cálculos salvos
- [ ] Exportar resumo como PDF
- [ ] Comparação de cenários lado a lado
- [ ] Integração com APIs de preço de combustível
- [ ] Modo dark/light toggle
- [ ] PWA (Progressive Web App)

---

**Desenvolvido com ❤️ para motoristas que querem tomar decisões com números, não no feeling.**

"R$1,70 mantém o carro rodando... R$2,00 constrói o lucro" 🔥
