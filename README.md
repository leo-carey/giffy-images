# GiffyImages

[![Publish](https://github.com/leoncarey/giffy-images/actions/workflows/publish.yml/badge.svg)](https://github.com/leoncarey/giffy-images/actions/workflows/publish.yml)

A JavaScript plugin to turn many elements images into a gif magically.
# How to work

You have some images inside a element:

```html
<div id="giffy-images-container">
     <img style="display: none;" width="150" src="<YOUR_SRC_IMAGE_1>" >
     <img style="display: none;" width="150" src="<YOUR_SRC_IMAGE_2>" >
     <img style="display: none;" width="150" src="<YOUR_SRC_IMAGE_3>" >
     <img style="display: none;" width="150" src="<YOUR_SRC_IMAGE_4>" >
</div>

<script>
    const optionsGI = {
        imageHolderId: 'giffy-images-container',
        timer: 100,
        autoplay: false
    }

    const giffyImages = new GiffyImages(optionsGI)
</script>
```

<br>

# Options

| Option | Default | Description |
|:------|:------|:------|
| imageHolderId | giffy-images-container | Parente element |
| speed | 100 | Milisseconds speed |
| autoplay | false | If Giffy run when starts |