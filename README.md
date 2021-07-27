# GiffyImages

[![Publish](https://github.com/leoncarey/giffy-images/actions/workflows/publish.yml/badge.svg)](https://github.com/leoncarey/giffy-images/actions/workflows/publish.yml)

A JavaScript plugin to turn many elements images into a gif magically.

---
## Getting started

```
npm i giffy-images -D
```
or
```
yarn add giffy-images -D
```

You can use in your bundler like grunt, gulp, webpack, etc...

or...you can use CDN

```html
<script src="https://cdn.jsdelivr.net/npm/giffy-images/dist/giffy-images.min.js"></script>
```

---
## How to use

Some images inside a element:
```html
<div id="giffy-images-container">
     <img style="display: none;" width="150" src="<YOUR_SRC_IMAGE_1>" >
     <img style="display: none;" width="150" src="<YOUR_SRC_IMAGE_2>" >
     <img style="display: none;" width="150" src="<YOUR_SRC_IMAGE_3>" >
     <img style="display: none;" width="150" src="<YOUR_SRC_IMAGE_4>" >
</div>
```

Implementation:
```js
const optionsGI = {
    imageHolderId: 'giffy-images-container',
    timer: 100,
    autoplay: false
}

const giffyImages = new GiffyImages(optionsGI)
```

<br>

## Options

| Option | Default | Description |
|:------|:------|:------|
| imageHolderId | giffy-images-container | Parente element id |
| speed | 100 | Milisseconds speed |
| autoplay | false | If Giffy run when is initialized |

<br>

---
## Methods

| Method | Description |
|:------|:------|
| play() | Start giffy |
| stop() | Stop giffy |
| playStop() | Start if it's stoped and Stop if it's started |

<br>

### Using **play()**

```JS
const optionsGI = {
    imageHolderId: 'giffy-images-container',
    speed: 100
}

const giffyImages = new GiffyImages(optionsGI)

document.getElementById('YOUR_CLICKABLE_ELEMENT_ID').addEventListener('click', (e) => {
    giffyImages.play()

    e.preventDefault();
    return false;
})
```

### Using **stop()**

```JS
const optionsGI = {
    imageHolderId: 'giffy-images-container',
    speed: 100
}

const giffyImages = new GiffyImages(optionsGI)

document.getElementById('YOUR_CLICKABLE_ELEMENT_ID_TO_START').addEventListener('click', (e) => {
    giffyImages.play()

    e.preventDefault();
    return false;
})

document.getElementById('YOUR_CLICKABLE_ELEMENT_ID_TO_STOP').addEventListener('click', (e) => {
    giffyImages.stop()

    e.preventDefault();
    return false;
})
```

### Using **playStop()**

```JS
const optionsGI = {
    imageHolderId: 'giffy-images-container',
    speed: 100
}

const giffyImages = new GiffyImages(optionsGI)

document.getElementById('YOUR_CLICKABLE_ELEMENT_ID').addEventListener('click', (e) => {
    giffyImages.playStop()

    e.preventDefault();
    return false;
})
```