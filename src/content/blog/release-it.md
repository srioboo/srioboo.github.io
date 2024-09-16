---
title: release it
description: release it
pubDate: 9 10 2024
---

https://www.npmjs.com/package/release-it

Instalar release-it, necesita commitlint

```sh
npm i --save-dev release-it @release-it/conventional-changelog
```

incluye script en package.json, ejemplo
```json
"scripts": {  
	"release": "release-it"  
},
```

archivo .release-it.json

```json
{  
	"git": {  
		"commitMessage": "chore: release v${version}"  
	},  
	"github": {  
		"release": true  
	},  
	"npm": {  
		"publish": false  
	},  
	"plugins": {  
		"@release-it/conventional-changelog": {  
			"infile": "CHANGELOG.md",  
			"preset": {  
				"name": "conventionalcommits",  
				"types": [  
					{  
					"type": "feat",  
					"section": "Features"  
					},  
					{  
					"type": "fix",  
					"section": "Bug Fixes"  
					} 
				]  
			}  
		}  
	}  
}
```

Alternativa
```json
{  
	"git": {  
		"commitMessage": "chore: release v${version}"  
	},  
	"github": {  
		"release": true  
	},  
	"npm": {  
		"publish": false  
	},  
	"plugins": {  
		"@release-it/conventional-changelog": {  
			"infile": "CHANGELOG.md",  
			"preset": {  
				"name": "conventionalcommits",  
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
		}  
	}  
}
```
