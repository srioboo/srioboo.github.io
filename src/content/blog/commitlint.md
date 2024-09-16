---
title: "Commitlint: instalación en proyectos web"
description: Instalación de Commitlint en cualquier framework
id: usar-commitlint-en-proyectos
img: https://res.cloudinary.com/salrion/images/{{trans}}/salrionblog/nombre-imagen-real/nombre-descriptivo-imagen.jpg
alt: texto alternativo imagen
date: 28 10 2023
pubDate: 10 28 2023
year:
  - "2023"
author: '{"name":"SRN"}'
layout: post
---

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

primero instalar [[husky]]

```sh
npx husky add .husky/commit-msg  'npx --no -- commitlint --edit ${1}'
```

Otro método sería primero incluir en package.json un script, y luego incluir en commit
```sh
npm pkg set scripts.commitlint="commitlint --edit"
npx husky add .husky/commit-msg 'npm run commitlint ${1}'
```

**Nota:** la opción "--edit" de commitlint actua contra el fichero COMMIT_EDITMSG en el directorio "git"
