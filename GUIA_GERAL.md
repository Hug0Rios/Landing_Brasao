# Guia geral · Brasão da Esperança

Criei a base da landing page em HTML, CSS e JavaScript. Já deixei o cabeçalho, a navegação e os botões de contato funcionando. **Início, Sobre Nós e Nossa História estão completos.** As outras seis seções já têm título e espaço reservado. Cada integrante preenche só a seção que ficou com ele.

Abra o [index.html](index.html) no navegador para ver a página. Se usar IA, envie a [skill do projeto](skills/brasao-landing/SKILL.md) junto com o pedido para ela seguir o padrão da base.

## Da sua branch ao PR

Com o projeto clonado, rode na pasta do projeto antes de editar. Troque `feat/acoes-sociais` por um nome que descreva a sua seção.

```bash
git switch main
git pull --ff-only origin main
git switch -c feat/acoes-sociais
```

Depois de editar, teste a página no navegador em tela larga e estreita. Confira se está na sua branch e se só aparecem arquivos da sua tarefa antes de rodar o `git add .`. Troque a mensagem do commit pelo que você fez.

```bash
git status -sb
git add .
git commit -m "Adiciona seção de ações sociais"
git push -u origin feat/acoes-sociais
```

No GitHub, vá em **Pull requests → New pull request**, selecione **base: `main`** e **compare: sua branch**. Confira as mudanças, clique em **Create pull request**, coloque um título e uma descrição curta e confirme. Mande o link no grupo para o 01 revisar e fazer o merge.
