---
id: comandos-shell-linux-unix-mac
title: 'Shell: Comandos para Linux/Unix/Mac'
description: Tabla con los comandos más útiles en Linux/Unix para usar en el terminal
heroImage: /blog-placeholder-5.jpg
alt: commandos linux unix mac
author:
  name: SRN
date: 2021-03-06
year: 2021
pubDate: Mar 06 2021
---

# Comandos linux/unix

## Directorios

| comando           | parámetro | resumen                              | **ejemplo**         |
| :---------------- | :-------- | :----------------------------------- | :------------------ |
| **cd directorio** |           | ir al directorio                     | cd /home/usuario    |
| **ls**            |           | listar directorio                    | ls                  |
|                   | -a        | mostrar también ocultos              | ls -a               |
|                   | -l        | formato largo                        | ls -l               |
|                   | -t        | mostrar fecha                        | ls -t               |
|                   | -r        | al revés                             | ls -r               |
|                   | -ltr      | combinación de parámetros            | ls -ltr             |
| **du**            |           | tamaños archivos de un directorio    | du /home/usuario    |
|                   | -c        | muestra tamaño total de los archivos | du -c /home/usuario |

## Archivos

| comando            | parámetro | resumen                       | ejemplo                   |
| :----------------- | :-------- | :---------------------------- | :------------------------ |
| **cat a1 > a2**    |           | concatena archivos            | cat arc1.txt arc2.txt     |
| **cat a1> a2 > r** |           | manda concatenación a archivo | cat a1.txt a2.txt > r.txt |
| **cat arc1**       |           | muestra el contenido          | cat arc1.txt              |

## Búsqueda en archivos

| comando           | parámetro | resumen                             | ejemplo                  |
| :---------------- | :-------- | :---------------------------------- | :----------------------- |
| **grep text arc** |           | busca texto en archivos             | grep hola arc1.txt       |
|                   | -c        | cuenta la lineas con coincidencias  | grep hola arc1.txt -c    |
|                   | -n        | muestra el número de linea          | grep hola arc1.txt -n    |
|                   | -v        | muestra las lineas que no coinciden | grep hola arc1.txt -v    |
|                   | -i        | ignora distincion mayúsculas        | grep hola arc1.txt -i    |
|                   | -R        | busca recursivamente en directorio  | grep hola directorio/ -R |

### Ejemplos grep

Buscar un patrón y guardarlo en un fichero:

```shell
grep -v \"hola\" > archivo_pruebas.txt
```

esto busca el patrón **"hola"** (las comillas se escapan con la barra invertida)

Y para guardar los resultados que no coincidan con el patrón:

```shell
grep -v \"hola\" > archivo_pruebas.txt
```

## El comando less para visualizar ficheros

El comando “less” permite cierta interactividad, una vez entras con en un archivo:

```shell
less nombre_archivo
```

Se puede usar el teclado para navegar, buscar, etc de forma similar a como se haría con vi/vim:

| **Tecla** | **Acción**                                                                               |     |
| --------- | ---------------------------------------------------------------------------------------- | --- |
| **g**     | lleva al principio del archivo                                                           |     |
| **G**     | lleva al final del archivo                                                               |     |
| **F**     | va recargando el archivo, es similar a "tail -f" para salir de esta opción pulsar ctrl+c |     |
| **q**     | sale del archivo                                                                         |     |
| **h**     | muestra la ayuda                                                                         |     |

## Screen

Screen permite tener una sesión de "reserva" en caso de que estando trabajando en una máquina tengas que desconectar y volver a conectar.
Para crear una sesión

```
screen
```

Y para desconectar e la sesión ctrl+a y luego la tecla d, ctrl+a actúa como prefijo para lanzar un comando

Después podemos entrar desde otro sitio y recuperar la sesión anterior con:

```
screen -dr
```

## find

find permite buscar archivos en un directorio, por ejemplo

```
find directorio
```

esto muestra todos los archivos del directorio y subdirectorio

Podemos filtrar con grep:

```
find directorio | grep cadena_a_buscar
```

## Filtrado de ficheros con AWK

AWK es una herramienta de procesamiento de patrones en líneas de texto. Su utilización estándar es la de filtrar ficheros o salida de comandos de UNIX, tratando las líneas para, por ejemplo, mostrar una determinada información sobre las mismas.

Este comando con el 'seen' muestra los elementos repetidos, si no muestra nada no hay repetidos

```shell
cat nombre_archivo.csv |  awk -F, 'seen[$0]++'

# esto da como resultado las 4 columnas duplicadas:

cat nnombre_archivo.csv | awk -F, 'a[$1$2$3$4]++{print $0}'

# o mejor, para comparar por columnas

awk -F, 'a[$1$2$3$4]++{print $0}' nombre_archivo.csv
```

> [!INFO] >http://www.sromero.org/wiki/linux/aplicaciones/uso_de_awk

## Diferencias entre archivos

- diff
  - solo diferencias: diff -c fileone filetwo
  - https://geekland.eu/comparar-directorios-y-archivos-comando-diff-linux/
  - diff -y '/home/joan/Escritorio/

Ver las diferencias entre 2 directorios o 2 ficheros/arc
```shell
diff a.csv b.csv --suppress-common-lines -y --color
```

Con grep
```shell
diff -u a.csv b.csv | grep -E "^\\+" > new.csv
```

## gzip

Descomprimir un archivo
```bash
gzip -d un_archivo_comprimido.txt.gz
```

Comprimir una serie de archivos (sustituyendo el archivo original)
```bash
gzip *.xml
```

Sustituye todos los xml por xml.gz comprimiéndolos

## SED

Sustituir una expresión regular por un texto vacío

```bash
sed -i -E "s/\/([a-z0-9]){4}\///" texto_de_pruebas.txt
```

Donde:

- _-E_ -> indica que se está usando una expresión regular
- _-i_ -> indica que se va a sobreescribir el archivo

# Comprobar puertos en uso en linux

```shell
sudo lsof -i -P -n | grep LISTEN
sudo netstat -tulpn | grep LISTEN
sudo ss -tulpn | grep LISTEN
sudo lsof -i:22 ## see a specific port such as 22 ##
sudo nmap -sTU -O IP-address-Here
```

## Otros

- **duf** como df pero gráfico ncurses
- **btop** como htop o top pero más visual
- **neofetch** información del sistema
- **sed** puede búscar, reemplazar, insertar y borrar. Lo más común es buscar y reemplazar. Permite editar archivos sin abrirlos.
- **curl** curl -sS -k -u $SPI_CREDS -X GET $JOBSTATUS_UR

