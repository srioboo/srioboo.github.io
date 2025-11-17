---
title: standard version
description: standard version
pubDate: 9 10 2024
tags:
  - porfolio
---

## Standard-version

> Standard-version está desprecated y recomendan otras alternativas
> como https://github.com/googleapis/release-please o b ien https://github.com/absolute-version/commit-and-tag-version

```sh
# Instalar standard-version
pnpm add -D standard-version

# Instarlar stardar-version con npm
npm i --save-dev standard-version


npm i --save-dev commit-and-tag-version
```

Añadimos los script al `package.json`.  

```json
...
  "scripts": {
    "release": "standard-version --no-verify" 
    // use --no-verify to skip git hooks we'll introduce later
  }

// o bien
{
  "scripts": {
    "release": "standard-version"
  }
}
```

Podemos customizarlo creando un `.versionrc` en la carpeta raíz del proyecto, por ejemplo:  

```
{
  "types": [
    {
      "type": "feat",
      "section": "✨ Features"
    },
    {
      "type": "fix",
      "section": "🐛 Bug Fixes"
    },
    {
      "type": "chore",
      "hidden": false,
      "section": "🚚 Chores"
    },
    {
      "type": "docs",
      "hidden": false,
      "section": "📝 Documentation"
    },
    {
      "type": "style",
      "hidden": false,
      "section": "💄 Styling"
    },
    {
      "type": "refactor",
      "hidden": false,
      "section": "♻️ Code Refactoring"
    },
    {
      "type": "perf",
      "hidden": false,
      "section": "⚡️ Performance Improvements"
    },
    {
      "type": "test",
      "hidden": false,
      "section": "✅ Testing"
    }
  ]
}

```

> You can see more options in [Conventional Changelog Configuration Spec](https://github.com/conventional-changelog/conventional-changelog-config-spec/blob/master/versions/2.1.0/README.md).



