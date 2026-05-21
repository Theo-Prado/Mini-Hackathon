# GitHub User Explorer 🚀

Um aplicativo web interativo que permite explorar perfis de usuários do GitHub e visualizar seus repositórios de forma elegante e responsiva. Agora com busca inteligente de perfis parecidos!

## 📑 Sumário

- [📋 Sobre o Projeto](#-sobre-o-projeto)
- [✨ Principais Características](#-principais-características)
- [🛠️ Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [📝 Estrutura do Projeto](#-estrutura-do-projeto)
- [🚀 Como Usar](#-como-usar)
- [🧪 Testes e Validações](#-testes-e-validações)
- [📊 Mudanças Realizadas](#-mudanças-realizadas)
- [🔍 Nova Funcionalidade: Perfis Parecidos](#-nova-funcionalidade-perfis-parecidos)
- [🔧 Principais Melhorias Implementadas](#-principais-melhorias-implementadas)
- [🌐 API Utilizada](#-api-utilizada)
- [📱 Responsividade](#-responsividade)
- [🎯 Casos de Uso](#-casos-de-uso)
- [📚 Como Contribuir](#-como-contribuir)
- [🚀 Sugestões de Melhorias Futuras](#-sugestões-de-melhorias-futuras)
- [📄 Licença](#-licença)
- [👨‍💻 Autor](#-autor)

## 📋 Sobre o Projeto

O **GitHub User Explorer** é uma aplicação desenvolvida durante um Mini-Hackathon (hackathon compacto) que integra a API pública do GitHub para fornecer uma experiência de busca e exploração

### ✨ Principais Características

- 🔍 **Busca em Tempo Real**: Pesquise qualquer usuário do GitHub instantaneamente
- 👤 **Perfil Detalhado**: Visualize informações completas do usuário (seguidores, repositórios públicos, localização, etc)
- 📦 **Repositórios em Destaque**: Veja os 6 repositórios mais populares do usuário ordenados por estrelas
- 👥 **Perfis Parecidos Inteligentes**: Descobra usuários similares baseado em localização, linguagens utilizadas e número de seguidores
- 🎨 **Design Responsivo**: Interface moderna desenvolvida com Tailwind CSS
- ⚡ **Interface Intuitiva**: Pesquisa rápida com suporte para Enter ou clique
- 🌙 **Dark Mode**: Design escuro por padrão para melhor conforto visual

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura semântica da página
- **JavaScript (ES6+)**: Lógica de busca e renderização dinâmica
- **Tailwind CSS**: Estilização moderna via CDN
- **GitHub API**: Integração com dados públicos do GitHub (REST API v3)

## 📝 Estrutura do Projeto

```
Mini-Hacktoon/
├── index.html      # Arquivo único contendo HTML, CSS e JavaScript
└── README.md       # Documentação do projeto
```

## 🚀 Como Usar

### Localmente

1. Clone o repositório:
```bash
git clone https://github.com/Theo-Prado/Mini-Hacktoon.git
cd Mini-Hacktoon
```

2. Abra o arquivo `index.html` no seu navegador:
```bash
# No macOS
open index.html

# No Windows
start index.html

# No Linux
xdg-open index.html
```

3. Digite o nome de um usuário do GitHub e clique em **Pesquisar** ou pressione **Enter**

4. Explore:
   - Informações do perfil (nome, bio, localização, estatísticas)
   - Os 6 repositórios mais populares
   - Até 6 perfis de usuários parecidos com ele

### Live Demo

O projeto está hospedado no GitHub Pages. Acesse:
- **URL**: [https://theo-prado.github.io/Mini-Hacktoon/](https://theo-prado.github.io/Mini-Hacktoon/)

## 🧪 Testes e Validações

### Funcionalidades Testadas

#### ✅ Busca de Usuários
- [x] Busca por nome de usuário válido retorna perfil correto
- [x] Mensagem de erro para usuários inexistentes
- [x] Validação de entrada vazia com feedback ao usuário
- [x] Carregamento visual durante a requisição

#### ✅ Renderização de Dados
- [x] Exibição correta de avatar do usuário
- [x] Nome de usuário e login formatados adequadamente
- [x] Biografia do usuário (quando disponível)
- [x] Estatísticas: seguidores, seguindo, repositórios públicos, localização
- [x] Link funcional para o perfil completo no GitHub

#### ✅ Repositórios
- [x] Carregamento dos 6 repositórios mais populares
- [x] Ordenação por quantidade de estrelas
- [x] Exibição de linguagem de programação (quando disponível)
- [x] Contagem de estrelas e forks
- [x] Links funcionais para os repositórios

#### ✅ Perfis Parecidos
- [x] Busca por localização (quando disponível)
- [x] Busca por linguagem principal mais utilizada
- [x] Busca por range de seguidores similares
- [x] Filtragem de duplicatas e do próprio usuário
- [x] Exibição de até 6 perfis recomendados
- [x] Informações completas dos perfis (avatar, bio, estatísticas)
- [x] Links diretos para os perfis no GitHub

#### ✅ Interface e UX
- [x] Busca por clique no botão "Pesquisar"
- [x] Busca por tecla Enter no campo de entrada
- [x] Responsividade em dispositivos móveis
- [x] Indicador de carregamento durante requisições
- [x] Tratamento de erros com mensagens claras
- [x] Limpeza de erros anteriores ao nova busca

#### ✅ Performance
- [x] Carregamento rápido de dados da API
- [x] Renderização suave sem travamentos
- [x] Otimização de requisições (máx. 6 repositórios e 6 perfis parecidos)

## 📊 Mudanças Realizadas

### Histórico de Commits

#### 1️⃣ Commit Inicial (`00e1842`)
**"Initialize Express app with GitHub User Explorer"**
- Inicialização do projeto com estrutura básica

#### 2️⃣ Estrutura Inicial (`6fd6156`)
**"Initialize Express app with GitHub User Explorer"**
- Preparação da estrutura do projeto

#### 3️⃣ Conversão para HTML (`6d8b092`)
**"Update and rename APP.js to index.html"**
- Migração de arquivo de aplicação para HTML único
- Consolidação em um arquivo `index.html` com HTML, CSS e JavaScript integrados

#### 4️⃣ Refatoração Estrutural (`808aa62`)
**"Refactor searchUser function and improve HTML"**
- Melhoria na estrutura HTML
- Adição de event listeners para funcionalidade de busca
- Refatoração da função `searchUser`
- Integração com a API do GitHub

#### 5️⃣ Refatoração Completa (`4f666dd`)
**"Refactor HTML and JavaScript for user search"**
- Revisão completa do código HTML e JavaScript
- Melhorias na estrutura e organização
- Otimização de performance

#### 6️⃣ Correção de Funcionalidade (`63637d4`)
**"Fix: Corrigir código HTML incompleto e implementar funcionalidade de busca de usuários GitHub"**
- Correção de HTML incompleto
- Implementação completa da funcionalidade de busca
- Integração correta com a API do GitHub
- Ajustes finais na interface

#### 7️⃣ Otimização Final (`f42d637`)
**"Fix: Move function definitions before DOMContentLoaded event listener"**
- **Correção crítica**: Movimentação das funções `buscarUsuario` e `renderizarUsuario` antes do event listener
- **Impacto**: Resolve problema onde as funções não eram acessíveis quando chamadas pelo evento DOM
- **Resultado**: Aplicação agora funciona perfeitamente em todos os navegadores

#### 8️⃣ Nova Funcionalidade - Perfis Parecidos ⭐
**"Adicionar funcionalidade de busca de perfis parecidos"** (`5506137` - 20 mai, 22:06)
- **Novas Funções Implementadas**:
  - `buscarPerfisParecidos()`: Busca usuários similares com múltiplas estratégias
  - `extrairLinguagensComuns()`: Identifica as 3 linguagens mais utilizadas
- **Critérios de Similaridade**:
  - Localização geográfica
  - Linguagens de programação utilizadas
  - Range de seguidores similar (0.5x a 2x)
- **UI Atualizada**: Nova seção "Perfis Parecidos" com cards dos usuários recomendados

#### 9️⃣ Atualização de Documentação 📚
**"docs: Atualizar README com nova funcionalidade de perfis parecidos e adicionar sumário"** (`f928231` - 20 mai, 22:13)
- README atualizado com sumário e detalhes da nova funcionalidade
- Documentação completa das mudanças realizadas
- Adição de exemplos de uso

#### 🔟 Interface Redesenhada 🎨 **MAIS RECENTE**
**"✨ Interface redesenhada: tema dark mode futurista com gradientes, animações e efeitos neon"** (`daa40bc` - 20 mai, 22:21)
- **Redesign Visual Completo**:
  - Tema dark mode futurista com gradientes neon
  - Animações suaves e efeitos visuais modernos
  - Paleta de cores: purpura, rosa, ciano em fundo escuro
- **Melhorias de UX**:
  - Transições e hover effects aprimorados
  - Melhor contraste e legibilidade
  - Efeitos de glassmorphism e neon glow
- **Performance**:
  - Otimização de animações CSS
  - Melhor responsividade em todos os dispositivos

## 🔍 Nova Funcionalidade: Perfis Parecidos

### Como Funciona

A busca por perfis parecidos utiliza um algoritmo inteligente que busca usuários similares baseado em três critérios principais:

#### 1. **Localização** 📍
Se o usuário buscado tem uma localização definida, o sistema busca outros usuários na mesma região com:
- Mínimo de 10 seguidores
- Mínimo de 2 repositórios

#### 2. **Linguagem de Programação** 💻
O sistema analisa os repositórios do usuário e identifica a linguagem mais comum, buscando outros desenvolvedores que utilizem a mesma linguagem:
- Mínimo de 10 seguidores
- Mínimo de 2 repositórios

#### 3. **Range de Seguidores** 👥
Busca usuários com número de seguidores similar (entre 0.5x e 2x a quantidade de seguidores do usuário):
- Mínimo de 2 repositórios

### Resultado

- Até **6 perfis parecidos** são exibidos em cards informativos
- Cada card mostra: avatar, nome, bio, número de seguidores, repositórios e seguindo
- Links diretos para os perfis no GitHub
- Interface responsiva que se adapta a qualquer dispositivo

### Exemplos de Uso

```
Buscar: octocat
↓
Resultado mostrará perfis de usuários em San Francisco (mesma localização)
com experiência em JavaScript/Python (linguagens principais)
e com seguidores em range similar
```

## 🔧 Principais Melhorias Implementadas

### Correções de Bugs
1. **Ordem de Carregamento JavaScript**: Movidas funções para antes do `DOMContentLoaded`
2. **Validação de Entrada**: Verificação de campo vazio com feedback ao usuário
3. **Tratamento de Erros**: Mensagens claras quando usuário não é encontrado
4. **Gestão de Requisições API**: Rate limiting intelligente e tratamento de erros em cascata

### Melhorias de UX
1. **Indicadores de Carregamento**: Spinner visual durante requisições
2. **Suporte a Enter**: Ativação de busca pressionando Enter
3. **Design Responsivo**: Adaptação para desktop, tablet e mobile
4. **Feedback Visual**: Cores diferenciadas para sucesso e erro
5. **Recomendações Inteligentes**: Sugestões contextualizadas de perfis similares
6. **Interface Futurista**: Tema dark mode com gradientes e efeitos neon

### Otimizações
1. **Limite de Requisições**: Máximo de 6 repos e 6 perfis parecidos para não sobrecarregar
2. **Ordenação por Popularidade**: Ordenação por stars descendente e followers
3. **Reutilização de Código**: Componentes bem estruturados e DRY
4. **Cache de Dados**: Evita duplicatas e requisições redundantes

## 🌐 API Utilizada

### Endpoints do GitHub

#### Usuários
- `GET /users/{username}` - Informações do usuário
- `GET /users/{username}/repos` - Repositórios do usuário (com paginação)

#### Busca
- `GET /search/users` - Busca avançada de usuários com múltiplos critérios

**Documentação**: [GitHub REST API v3](https://docs.github.com/en/rest/users/users)

### Limitações de Rate Limiting
- **Sem autenticação**: 60 requisições por hora
- **Com autenticação**: 5.000 requisições por hora

> **Dica**: Para uso intensivo, configure um token de autenticação na requisição

## 📱 Responsividade

A aplicação é totalmente responsiva:
- **Desktop**: Grid de 3 colunas (perfil + repositórios + perfis parecidos)
- **Tablet**: Ajuste automático de layout com 2 colunas
- **Mobile**: Stack vertical com uma coluna

### Breakpoints Utilizados (Tailwind)
- `md:` (768px+) - Tablets e acima
- `lg:` (1024px+) - Desktops

## 🎯 Casos de Uso

1. **Descoberta de Desenvolvedores**: Explore perfis e portfólios de programadores, encontre talentos similares
2. **Avaliação de Projetos**: Veja repositórios populares de um usuário e de seus pares
3. **Pesquisa de Tecnologias**: Identifique linguagens utilizadas e comunidades de interesse
4. **Networking**: Encontre e conecte-se com desenvolvedores interessantes na sua região
5. **Benchmarking**: Compare estatísticas com desenvolvedores similares

## 📚 Como Contribuir

1. Faça um Fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

### Ideias para Contribuição
- Melhorias na interface visual
- Novos critérios de similaridade
- Suporte para múltiplos idiomas
- Temas customizáveis
- Exportação de dados

## 🚀 Sugestões de Melhorias Futuras

- [ ] Adicionar busca por organização
- [ ] Filtros avançados (linguagem, stars mínimas, data de criação)
- [ ] Paginação de repositórios
- [ ] Gráficos de contribuições ao longo do tempo
- [ ] Cache de requisições com LocalStorage
- [ ] Modo light/dark toggle
- [ ] Favoritos locais com LocalStorage
- [ ] Histórico de buscas recentes
- [ ] Autenticação com GitHub OAuth para aumentar rate limit
- [ ] Análise de linguagens por repositório
- [ ] Comparação lado a lado de dois usuários
- [ ] Trending developers por tecnologia

## 📄 Licença

Este projeto está sob licença MIT. Veja o arquivo LICENSE para mais detalhes.

## 👨‍💻 Autor

**Theo Silva Prado**
- GitHub: [@Theo-Prado](https://github.com/Theo-Prado)
- Email: theo.silva.prado@gmail.com

---

**Desenvolvido com ❤️ durante o Mini-Hacktoon**

Última atualização: 20 de maio de 2026
