---
title: Husky, realiza acciones antes de subir tu código
description: Instalación husky para permitir realizar acciones previas a los commits, push y otras acciones de git
pubDate: 9 12 2024
---


```sh
# Instalar husky
npm add -D husky

# Activar hooks
npx husky install

## incluimos un script en package.json
npm pkg set scripts.commitlint="commitlint --edit"

## incluimos el codigo correspondiente en el commit-msg
npx husky add .husky/commit-msg 'npm run commitlint ${1}'

```

El código anterior:
1. añade husky en modo developer
2. instala la carpeta de husky para la condiguración
3. añade el primer hook al introducir el mensaje que revisa los commits con commitlint

#### Otros hooks
Antes de hacer el push, podemos añadir otros hooks para mejorar la calidad del código, como formateado, linting y testing.

Aunque se haya añadido el "Format On Save" para linting, test unitarios, ect en "watch mode", esto es una preferencia personal en muchas ocasiones. Para mejora el código y una colaboración eficiente, podemos añadir git hooks como `pre-commit` o `pre-push` para formateoar, lintear y testear antes de abrir un MR/PR.

Abajo tomamos como ejemplo un proyecto con SveltKit skeleton, en el que hemos seleccionado Typescript, Prettier, ESLint y Playwright.

Primero añadimos formateo y linteo en el `pre-commit`:

```sh
# Add pre-commit hook
npx husky add .husky/pre-commit 'pnpm format && pnpm lint'

# si queremos añadir archivos a staging, lanzaremos
npx husky add .husky/pre-commit 'pnpm format && pnpm lint && git add'
```

Segundo, de forma opcional añadimos `svelte-check` en el stage `pre-push`:  

```sh
# Add pre-push hook
npx husky add .husky/pre-push 'pnpm check'
```

> El `playwright test` es mejor hacerlo en el CI, dado que es un test e2e.
> Si usas jest, uvu, o vitest, puedes considerar lanzar los test unitarios o de componentes en el `pre-commit` o `pre-push`.

#### Advertencias

`git hooks` no es infalibre, se puede siempre hacer un "bypass" de varias formas, pero sería bueno alinearte con tu equipo.

> Algunos argumentar que lanzar el linting y el testin en `git hooks` lastra la productividad y que no se puede forzar siempre. "¿Por qué hacerlo si los tenemnos el el CI?"
