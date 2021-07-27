'use strict'

class GiffyImages {
    constructor({ imageHolderId = 'giffy-images-container', speed = 50, autoplay = false }) {
        this.speed = speed
        this.autoplay = autoplay
        this._images = document.getElementById(imageHolderId) ? document.getElementById(imageHolderId).children : null

        this.animate = null
        this.currentImage = 0
        this.isPlaying = false

        if(this.autoplay) {
            this.playStop()
        }
    }

    play() {
        this.isPlaying = true;
		this.animate = setInterval(this.#_playAnimation.bind(this), this.speed);
    }

    stop() {
        this.isPlaying = false;
        clearInterval(this.animate);
    }

    playStop () {
        if (this.isPlaying) {
			this.stop()
		} else {
			this.play()
		}
    }

    #_playAnimation() {
        if (!this._images) return;

        if (this.currentImage === 0) {
            this._images[0].style.display = 'block'
            this._images[this._images.length - 1].style.display = 'none'
        } else {
            this._images[this.currentImage - 1].style.display = 'none'
            this._images[this.currentImage].style.display = 'block'
        }

        if (this.currentImage !== this._images.length - 1)
            this.currentImage += 1;
        else
            this.currentImage = 0;
    }
}


module.exports = GiffyImages