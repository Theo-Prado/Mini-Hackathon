# GitHub User Explorer 🚀

Um aplicativo web interativo que permite explorar perfis de usuários do GitHub e visualizar seus repositórios de forma elegante e responsiva.

## 📋 Sobre o Projeto

O **GitHub User Explorer** é uma aplicação desenvolvida durante um Mini-Hacktoon (hackathon compacto) que integra a API pública do GitHub para fornecer uma experiência de busca e exploração de usuários. A aplicação foi construída com foco em simplicidade, performance e design moderno.

### Principais Características

- 🔍 **Busca em Tempo Real**: Pesquise qualquer usuário do GitHub instantaneamente
- 👤 **Perfil Detalhado**: Visualize informações completas do usuário (seguidores, repositórios públicos, localização, etc)
- 📦 **Repositórios em Destaque**: Veja os 6 repositórios mais populares do usuário ordenados por estrelas
- 🎨 **Design Responsivo**: Interface moderna desenvolvida com Tailwind CSS
- ⚡ **Interface Intuitiva**: Pesquisa rápida com suporte para Enter ou clique
- 🌙 **Dark Mode**: Design escuro por padrão para melhor conforto visual

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura semântica da página
- **JavaScript (ES6+)**: Lógica de busca e renderização dinâmica
- **Tailwind CSS**: Estilização moderna via CDN
- **GitHub API**: Integração com dados públicos do GitHub

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
- [x] Otimização de requisições (máx. 6 repositórios)

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

#### 7️⃣ Otimização Final (`f42d637`) - **ATUAL**
**"Fix: Move function definitions before DOMContentLoaded event listener"**
- **Correção crítica**: Movimentação das funções `buscarUsuario` e `renderizarUsuario` antes do event listener
- **Impacto**: Resolve problema onde as funções não eram acessíveis quando chamadas pelo evento DOM
- **Resultado**: Aplicação agora funciona perfeitamente em todos os navegadores

## 🔧 Principais Melhorias Implementadas

### Correções de Bugs
1. **Ordem de Carregamento JavaScript**: Movidas funções para antes do `DOMContentLoaded`
2. **Validação de Entrada**: Verificação de campo vazio com feedback ao usuário
3. **Tratamento de Erros**: Mensagens claras quando usuário não é encontrado

### Melhorias de UX
1. **Indicadores de Carregamento**: Spinner visual durante requisições
2. **Suporte a Enter**: Ativação de busca pressionando Enter
3. **Design Responsivo**: Adaptação para desktop, tablet e mobile
4. **Feedback Visual**: Cores diferenciadas para sucesso e erro

### Otimizações
1. **Limite de Repositórios**: Máximo de 6 repos para não sobrecarregar
2. **Ordenação por Popularidade**: Ordenação por stars descendente
3. **Reutilização de Código**: Componentes bem estruturados e DRY

## 🌐 API Utilizada

### Endpoints do GitHub

- `GET /users/{username}` - Informações do usuário
- `GET /users/{username}/repos` - Repositórios do usuário

**Documentação**: [GitHub REST API v3](https://docs.github.com/en/rest/users/users)

## 📱 Responsividade

A aplicação é totalmente responsiva:
- **Desktop**: Grid de 3 colunas (perfil + repositórios)
- **Tablet**: Ajuste automático de layout
- **Mobile**: Stack vertical com uma coluna

## 🎯 Casos de Uso

1. **Descoberta de Desenvolvedores**: Explore perfis e portfólios de programadores
2. **Avaliação de Projetos**: Veja repositórios populares de um usuário
3. **Pesquisa de Tecnologias**: Identifique linguagens utilizadas
4. **Networking**: Encontre e conecte-se com desenvolvedores interessantes

## 📚 Como Contribuir

1. Faça um Fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 🚀 Sugestões de Melhorias Futuras

- [ ] Adicionar busca por organização
- [ ] Filtros avançados (linguagem, stars mínimas, etc)
- [ ] Paginação de repositórios
- [ ] Gráficos de contribuições
- [ ] Cache de requisições
- [ ] Modo light/dark toggle
- [ ] Favoritos locais com LocalStorage
- [ ] Histórico de buscas

## 📄 Licença

Este projeto está sob licença MIT. Veja o arquivo LICENSE para mais detalhes.

## 👨‍💻 Autor

**Theo Silva Prado**
- GitHub: [@Theo-Prado](https://github.com/Theo-Prado)
- Email: theo.silva.prado@gmail.com

---

**Desenvolvido com ❤️ durante o Mini-Hacktoon**

Última atualização: 20 de maio de 2026
