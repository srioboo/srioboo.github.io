---
id: bash-comandos-utiles
title: 'Bash: comandos utiles'
# img: https://res.cloudinary.com/salrion/images/{{trans}}/salrionblog/nombre-imagen-real/nombre-descriptivo-imagen.jpg
heroImage: https://res.cloudinary.com/salrion/image/upload/w_310,h_150,q_90,f_auto/salrionblog/macbook.jpg
alt: texto alternativo imagen
# layout: post
author:
  name: SRN
date: 2023-03-11
year: 2023
description: Comandos útiles de bash
pubDate: 03 11 2023
---

## gzip

Descomprimir un archivo

```bash
gzip -d un_archivo_comprimido.txt.gz
```

Comprimir una serie de archivos (sustituyendo el archivo original)

```bash
gzip *.xml
```

Sustituye todos los xml por xml.gz comprimiendolos

## SED

Sustituir una expresión regular por un texto vacío

```bash
sed -i -E "s/\/([a-z0-9]){4}\///" texto_de_pruebas.txt
```

Donde:

- _-E_ -> indica que se está usando una expresión regular
- _-i_ -> indica que se va a sobreescribir el archvo
