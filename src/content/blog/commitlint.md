---
title: Commitlint, comprueba que tus commit tienen el formato correcto. Instalación en proyectos web
description: Guía de instalación de Commitlint para cualquier framework, para revisar el formato correcto de los links y conseguir un log limpio y útil
id: usar-commitlint-en-proyectos
img: https://res.cloudinary.com/salrion/images/{{trans}}/salrionblog/nombre-imagen-real/nombre-descriptivo-imagen.jpg
alt: texto alternativo imagen
date: 28 10 2023
pubDate: 10 28 2023
year:
  - "2023"
author: '{"name":"SRN"}'
tags:
  - porfolio
---
## ¿Qué es Commitlint?

Commitlint revisa la estrucutura de los commit para que estos tengan un formato correcto, si no tienen el formato correcto no te permitirá realizar el commit. Esto es una buena opción en entornos colaborativos, ya que permite que se lleve una estandarización en los commits, usando por ejemplo, conventional commits, y consiguiendo así un log más limpio y útil.
## Instalar con pnpm

```sh
# Install commitlint cli and conventional config
pnpm add -D @commitlint/config-conventional @commitlint/cli

# Configurar para usar conventional config
echo "module.exports = {extends: ['@commitlint/config-conventional']}" > commitlint.config.js
```

### verificar

```sh
echo "hola mundo" | pnpm commitlint
```

## Instalar con npm

```sh
### Instalar globalmente
npm install -g @commitlint/cli @commitlint/config-conventional

# Instalar localmente
npm i -D @commitlint/cli @commitlint/config-conventional

# Configurar para usar conventional config
echo "module.exports = {extends: ['@commitlint/config-conventional']}" > commitlint.config.js
```

### verificar

```sh
echo "hola mundo" | commitlint
```

## Añadir un hook con husky

Esto permite la automatización del proyecto, y evita que se creen commits incorrectos.

Primero es necesario instalar [[husky]]

```sh
npx husky add .husky/commit-msg  'npx --no -- commitlint --edit ${1}'
```

Otro método sería primero incluir en package.json un script, y luego incluir en commit

```sh
npm pkg set scripts.commitlint="commitlint --edit"
npx husky add .husky/commit-msg 'npm run commitlint ${1}'
```

**Nota:** la opción "--edit" de commitlint actua contra el fichero COMMIT_EDITMSG en el directorio "git"
