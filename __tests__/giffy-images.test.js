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

    it.todo('Should check intervals')
    it.todo('Should check play gif')
    it.todo('Should check stop gif')
    it.todo('Should check playStop')
})