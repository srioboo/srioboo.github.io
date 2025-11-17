---
title: Commitizen, mejora la calidad de tus commits en git
description: Guía de instalación de commitizen para generar commits mediante el formato de conventional commits y mejorar la legibilidad del log de git
pubDate: 09 12 2024
heroImage: /blog-placeholder-1.jpg
tags:
  - porfolio
---
Commitizen te permite escribir los commits de git usando el formato de "conventional commits" de forma más intuitiva.

Conventional commit es un formato de escritura de commits (comentarios de subida de git) que ayuda en la legibilidad del log y nos permite generar un changelog (log de cambios) del las diferentes releases del código.

Instalación:

```shell
# Install commitizen, 
# @commitlint/cz-commitlint (adapter), and
# inquirer (peer dependency of @commitlint/cz-commitlint)
pnpm add -D commitizen @commitlint/cz-commitlint inquirer
```

Integración en proyectos con package.json
```json
...
  "scripts": {
    "commit": "cz"
  }
```

Usamos `@commitlint/cz-commitlint` como adaptador para asegurarlos que el commit sigue la convención configurada en `commitlint.config.cjs`.