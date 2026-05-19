# Una playlist especial

Página web estática y ligera para navegar una playlist con el texto que acompaña a cada canción. La versión actual usa el PDF `Una playlist especial. (2).pdf` como referencia e incluye 32 canciones.

## Cómo verla

Recomendado:

```bash
node server.js
```

Después abre la página de inicio:

```text
http://127.0.0.1:8000
```

Abrir `index.html` directamente como `file://` puede provocar avisos de seguridad del navegador.

La playlist está en:

```text
http://127.0.0.1:8000/#playlist
```

La página de recuerdos está en:

```text
http://127.0.0.1:8000/#recuerdos
```

El poemario está en:

```text
http://127.0.0.1:8000/#poemario
```

La sección "Cosas que me recuerdan a ti" está en:

```text
http://127.0.0.1:8000/#cosas
```

Usa los enlaces con `#playlist` y `#recuerdos` desde la página inicial para navegar sin recargar. Así, si hay una canción reproduciéndose, seguirá sonando al cambiar de sección. Los archivos `playlist.html` y `recuerdos.html` siguen existiendo como acceso directo de respaldo, pero al navegar entre archivos HTML el navegador corta el audio.

## Despliegue con GitHub y Netlify

El proyecto está preparado para Netlify con `netlify.toml`. En Netlify usa estos ajustes:

```text
Build command: vacío
Publish directory: .
```

Flujo recomendado:

```bash
git add .
git commit -m "Actualiza playlist"
git push
```

Cuando el repositorio esté conectado a Netlify, cada `git push` redesplegará la web automáticamente.

## Cómo escuchar canciones dentro de la página

La web busca archivos locales en la carpeta `audio`. Por ejemplo, para la primera canción espera:

```text
audio/01-qtalhoy-c-mari.mp3
```

Si un archivo no existe, el reproductor lo avisará y podrás usar los botones de YouTube o Spotify para abrir una búsqueda de esa canción.

## Cómo añadir a mano los fragmentos de letras

En `app.js`, cada canción tiene una propiedad `story`. Los textos normales usan:

```js
{ type: "p", text: "Texto normal" }
```

Los fragmentos de letras están preparados como bloques especiales:

```js
{ type: "lyrics", text: "[Pega aquí el fragmento de letra]" }
```

Para añadirlos, sustituye únicamente el texto entre comillas o usa backticks si el fragmento tiene varias líneas:

```js
{
  type: "lyrics",
  text: `Primera línea
Segunda línea
Tercera línea`
}
```

No cambies `type: "lyrics"` ni borres las comas entre bloques. La página respetará los saltos de línea y mostrará esos fragmentos con formato de cita.

## Cómo añadir enlaces directos

Cada canción en `app.js` tiene estos campos:

```js
youtube: "",
spotify: "",
```

Pega el enlace directo entre las comillas:

```js
youtube: "https://www.youtube.com/watch?v=...",
spotify: "https://open.spotify.com/track/...",
```

Si dejas un campo vacío, la página seguirá usando la búsqueda automática para ese botón.

## Cómo añadir la letra completa de cada canción

La página tiene dos vistas por canción: `Explicación` y `Letra`.

En `app.js`, cada canción tiene este campo:

```js
lyrics: "",
```

Para pegar una letra completa, cambia las comillas por backticks y pega el texto dentro:

```js
lyrics: `Primera línea de la letra
Segunda línea de la letra
Tercera línea de la letra`,
```

La vista `Letra` respetará los saltos de línea. La vista `Explicación` seguirá usando el campo `story`.

## Cómo añadir recuerdos

Edita `recuerdos.js`. Cada recuerdo tiene esta forma:

```js
{
  date: "2026-05-12",
  title: "Título del recuerdo",
  text: "Texto del recuerdo",
  image: "assets/mi-foto.jpg",
  imageFit: "contain",
  imageAlt: "Descripción breve de la imagen"
}
```

La fecha debe ir como `AAAA-MM-DD`. Las tarjetas se ordenan automáticamente de más antiguo a más reciente.

Si no quieres imagen, deja:

```js
image: "",
imageAlt: ""
```

Por defecto usa `imageFit: "contain"` para que la imagen se vea completa aunque sea vertical o tenga una proporción rara. Si alguna foto quieres que rellene el hueco aunque se recorte un poco, usa:

```js
imageFit: "cover"
```

## Cómo añadir poemas

Edita `poemas.js`. Cada poema tiene esta forma:

```js
{
  title: "Título del poema",
  text: `Primer verso
Segundo verso
Tercer verso`
}
```

Cada poema aparece como una tarjeta en `#poemario`. Al pulsarla, se abre una tarjeta superpuesta con el texto completo y se puede cerrar con la `X`, haciendo clic fuera o pulsando `Escape`.

## Cómo añadir cosas que me recuerdan a ti

Edita `cosas.js`. Cada tarjeta tiene esta forma:

```js
{
  title: "Título de la tarjeta",
  image: "assets/mi-imagen.jpg",
  imageAlt: "Descripción breve de la imagen",
  text: "Explicación de por qué esta imagen me recuerda a ti."
}
```

Al pulsar una foto en `#cosas`, se abre una tarjeta superpuesta con la imagen y el texto completo.

## Archivos principales

- `index.html`: estructura de la página.
- `playlist.html`: página de la playlist.
- `recuerdos.html`: página de recuerdos.
- `recuerdos.js`: datos de recuerdos ordenados por fecha.
- `poemas.js`: datos del poemario.
- `cosas.js`: datos del panel de "Cosas que me recuerdan a ti".
- `styles.css`: diseño responsive.
- `app.js`: datos de la playlist, búsqueda, selección de canciones y reproductor.
- `server.js`: servidor local mínimo para probar la página sin restricciones de `file://`.
- `assets/playlist-cover.png`: imagen de portada generada para la web.
