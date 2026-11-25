---
name: brasao-landing
description: Implemente ou revise uma seção da landing page Brasão da Esperança seguindo o protótipo, o relatório de requisitos e a base em HTML, CSS e JavaScript puros.
---

# Landing page Brasão da Esperança

Leia `index.html` e `css/style.css` na raiz do projeto. Consulte `js/main.js` se a tarefa incluir interação.

## Escopo

- Início, Sobre Nós e Nossa História já estão completos. Ações Sociais (`#acoes`), Acolhimento (`#acolhimento`), Capacitação (`#capacitacao`), Empregabilidade (`#empregabilidade`), Projetos (`#projetos`) e Contato (`#contato`) já têm títulos e os botões aplicáveis. Preencha apenas a seção solicitada, no trecho existente do HTML.
- Preserve os IDs, os links internos e os destinos oficiais dos botões de WhatsApp e Instagram. O cabeçalho tem efeito de vidro ao rolar, links em texto com sublinhado ativo, um botão vermelho “Fale conosco” e menu para celular.
- Use o [protótipo](https://brasao-da-esperanca-xfji.bolt.host/) como referência visual e o relatório de requisitos como fonte para fatos institucionais (assets/docs/requisitos.pdf). Confirme dados que ainda faltarem sobre cursos, apoio, vagas ou inscrições com o responsável.

## Como implementar

- Use HTML semântico, CSS e JavaScript nativo. A página deve continuar abrindo diretamente em `index.html`, sem instalação, framework ou build.
- Reaproveite os estilos de `.section`, `.container`, `.section-intro`, `.section-actions` e `.button`. Use as cores de `:root`, Playfair Display nos títulos e DM Sans no texto. Escreva o CSS específico em um bloco da seção para evitar afetar as demais.
- Use imagens locais em `assets/images/`, com texto alternativo adequado. Use `loading="lazy"` nas imagens de conteúdo abaixo da apresentação.
- Use links para navegação e botões para ações. Mantenha o foco visível e respeite `prefers-reduced-motion` ao adicionar animações.

## Entrega

Confira a seção no navegador em tela larga e estreita, teste pelo teclado e verifique os links. Siga o [Guia geral](../../GUIA_GERAL.md) para abrir um PR da sua branch para a `main` e enviar para revisão do 01.
