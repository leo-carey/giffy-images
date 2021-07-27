import { JSDOM } from "jsdom"
const dom = new JSDOM()
global.document = dom.window.document
global.window = dom.window

import GiffyImages from '../src/GiffyImages'

describe('Tests for GiffyImages lib', function () {
    it('Should create instance of GiffyImages', function () {
        const giffyImages = new GiffyImages({})
        expect(giffyImages instanceof GiffyImages).toBe(true)
    })

    it('Should check play gif and stop it after', function () {
        const giffyImages = new GiffyImages({})
        giffyImages.play()

        expect(giffyImages.isPlaying).toBe(true)

        giffyImages.stop()

        expect(giffyImages.isPlaying).toBe(false)
    })

    it('Should check playStop if play and stop', function () {
        const giffyImages = new GiffyImages({})
        giffyImages.playStop()

        expect(giffyImages.isPlaying).toBe(true)

        giffyImages.playStop()
    })
})