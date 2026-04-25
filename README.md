# Portfólio — Rodolfo Cabral Junior

> Full Stack Developer · ADS · Marketing Digital · TI Hospitalar  
> Jaraguá, GO — Brasil

[![Live](https://img.shields.io/badge/status-live-brightgreen)](https://portifolio.cabralvestecnologia.com.br)
[![Made with](https://img.shields.io/badge/made%20with-HTML%20CSS%20JS-gold)](https://portifolio.cabralvestecnologia.com.br)

## Sobre o projeto

Portfólio profissional desenvolvido do zero com HTML5, CSS3 e JavaScript
Vanilla — sem frameworks, sem dependências, sem build step.
Deploy automatizado via pipeline CI/CD próprio: Git → GitHub → Webhook → HostGator.

## Stack

| Camada      | Tecnologia                                          |
|-------------|-----------------------------------------------------|
| Estrutura   | HTML5 semântico                                     |
| Estilo      | CSS3 puro — variáveis, grid, clamp                  |
| Interação   | JavaScript ES6+ Vanilla                             |
| Tipografia  | Playfair Display · Outfit · JetBrains Mono          |
| Imagens     | Python/Pillow (processamento local)                 |
| Deploy      | Git → GitHub Webhook → HostGator                    |

## Estrutura de pastas

```
portifolio/
├── index.html                    # Página principal
├── deploy.php                    # Webhook CI/CD (HMAC SHA-256)
├── assets/
│   ├── css/
│   │   └── style.css             # Design system completo
│   ├── js/
│   │   └── main.js               # Cursor · scroll · reveal · menu
│   └── img/
│       ├── foto/foto.jpg         # Foto profissional
│       ├── logo-topo/logotopo.png
│       └── logo-footer/logo.png
├── .gitignore
└── README.md
```

## Funcionalidades

- Cursor customizado dourado com `mix-blend-mode: exclusion`
- Elemento visual geométrico (anéis concêntricos) no hero
- Reveal on scroll com IntersectionObserver API
- Menu hambúrguer mobile com animação 3 linhas → X
- Nav com efeito glassmorphism ao rolar a página
- Design responsivo Mobile First (min-width media queries)
- Tipografia editorial com Playfair Display
- Grain texture via SVG inline para profundidade visual

## Projetos exibidos

| # | Projeto | Status | Stack principal |
|---|---------|--------|-----------------|
| 01 | Igreja da Vitória | ● Live | PHP 8.2 · Tailwind · GA4 · CI/CD |
| 02 | Rádio Amaral | ● Live | Vanilla JS · YouTube API · PWA |
| 03 | App Igreja da Vitória | ⬡ Em dev | Flutter · Firebase · SQLite |

## Deploy

Pipeline CI/CD configurado do zero:

```
git push origin main
    ↓
GitHub Webhook (HMAC SHA-256)
    ↓
deploy.php no servidor
    ↓
git pull em produção (~10 segundos)
```

**Subdomínio:** `portifolio.cabralvestecnologia.com.br`  
**Servidor:** HostGator Plano M · IP: 69.6.248.134  
**SSL:** AutoSSL HostGator (renovação automática)

## Autor

**Rodolfo Cabral Junior**  
Full Stack Developer · Cabr@lvesTecnologia

[![GitHub](https://img.shields.io/badge/GitHub-Rodolfo--Cabral--junior-black)](https://github.com/Rodolfo-Cabral-junior)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-rodolfo--junior-blue)](https://www.linkedin.com/in/rodolfo-junior-6768a8333/)
[![Email](https://img.shields.io/badge/Email-cabralvestecnologia@gmail.com-gold)](mailto:cabralvestecnologia@gmail.com)"" 
"" 
