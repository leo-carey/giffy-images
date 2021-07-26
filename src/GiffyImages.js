'use strict'

class GiffyImages {
    constructor({ imageHolderId, timer = 50, autoplay = false }) {
        this.timer = timer
        this.autoplay = autoplay
        this._images = document.getElementById(imageHolderId).children

        this.animate = null
        this.counter = 0
        this.isPlaying = 0

        if(this.autoplay) {
            this.playStop()
        }
    }

    play() {
        this.isPlaying = 1;
		this.animate = setInterval(this.#_playAnimation.bind(this), this.timer);
    }

    stop() {
        this.isPlaying = 0;
        clearInterval(this.animate);
    }

    playStop () {
        if (this.isPlaying == 1) {
			this.stop()
		} else {
			this.play()
		}
    }

    #_playAnimation() {
        if (this.counter === 0) {
            this._images[0].style.display = 'block'
            this._images[this._images.length - 1].style.display = 'none'
        } else {
            this._images[this.counter - 1].style.display = 'none'
            this._images[this.counter].style.display = 'block'
        }

        if (this.counter !== this._images.length - 1)
            this.counter += 1;
        else
            this.counter = 0;
    }
}


module.exports = GiffyImages