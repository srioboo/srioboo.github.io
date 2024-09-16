---
title: Commitizen guía de intalación
description: Guía de instalación de commitizen para generar commits mediante el formato de conventional commits
pubDate: 09 12 2024
heroImage: /blog-placeholder-1.jpg
---
Permite escribir conventional commits con mayor facilidad.

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