---
title: Configuraciones interesantes para un nuevo proyecto
description: Configuraciones esenciales o interesantes para nuevos proyectos que facilitan la vida a un desarrollador
id: setup-para-nuevos-proyectos
img: https://res.cloudinary.com/salrion/images/{{trans}}/salrionblog/nombre-imagen-real/nombre-descriptivo-imagen.jpg
alt: texto alternativo imagen
author: '{"name":"SRN"}'
date: 2023-10-12
pubDate: 10 12 2023
years: '{"year": 2023}'
# layout: post
---

Configuraciones que son esenciales o al menos interesantes de tener para un nuevo proyecto.

## Husky configuración para monorepo s

#### husky Instalación

Para instarlar husky en un monorepo, ejecutar lo siguiente en la carpeta raíz

```shell
npx husky install
npx husky add .husky/pre-commit "npm test"
```

Instalación de los linters, esto se hace en el proyecto de frontend (en backend dependerá de como se configure)

```shell
npm install husky lint-staged --save-dev
```

Si no tienes instalado ningún linter

```shell
npm install eslint-plugin-prettier eslint-config-prettier --save-dev
npm install --save-dev --save-exact prettier
```

estos son solo para desarrollo de ahí el uso de --save-dev

Crear los ficheros .eslintignore y .prettierignore con el siguiente código:

```sh
.DS_Store
node_modules
/build
/.svelte-kit
/package
.env
.env.*
!.env.example

# Ignore files for PNPM, NPM and YARN
pnpm-lock.yaml
package-lock.json
yarn.lock

# ignorar archivos de github
.github
```

esto evitará que se trate de validar directorios que no son necesarios.

Configurando el package.json ¿esto debe estar en el raíz?

- añadir las siguientes lineas en la sección scripts

```
"prepare": "cd .. && husky install frontend/.husky"
```

con esto, al lanzar **npm prepare** se lanza antes de que hagamos commit del código

Añadimos la configuración del linting:

```json
"lint-staged": {
        "*.{js,ts,tsx, jsx}": [
            "eslint --quiet --fix"
        ],
        "*.{json,md,html,js,jsx,ts,tsx}": [
            "prettier --write"
        ]
    },
```

Y añadimos a los srcipt la línea:

```json
"lint-front": "lint-staged"
```

Con **npm run lint-front** lanzará el linting de la aplicación.

Por último modificamos el script de pre-commit

```sh
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

cd frontend
npm run lint-frontend
```
