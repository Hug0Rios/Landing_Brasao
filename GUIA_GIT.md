# Da branch ao PR

Com o projeto já clonado e o acesso ao GitHub liberado, abra o terminal na pasta do projeto. Execute uma linha por vez. Se der erro, manda mensagem no grupo antes de continuar.

Troque `nome_branch` pelo nome da branch em todos os comandos.

## 1. Criar sua branch antes de editar

Comece sem alterações pendentes:

```bash
git switch main
git pull --ff-only origin main
git switch -c nome_branch
```

## 2. Fazer sua parte

Edite os arquivos, salve e teste a página no navegador.

## 3. Enviar sua parte

Confira se o primeiro comando mostra sua branch e troque a mensagem pelo que você fez:

```bash
git branch --show-current
git status
git add .
git commit -m "Adiciona cabecalho"
git push -u origin nome_branch
```

## 4. Abrir o PR no GitHub

1. Abra o repositório no GitHub.
2. Clique em **Pull requests → New pull request**.
3. Selecione **base: `main`** e **compare: sua branch**.
4. Confira os arquivos e clique em **Create pull request**.
5. Preencha o título e uma descrição curta do que fez. Confirme em **Create pull request**.
6. Envie o link no grupo para revisão. Deixe o merge com ele.
