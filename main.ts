let strip = neopixel.create(DigitalPin.P14, 4, NeoPixelMode.RGB)
basic.forever(function () {
    for (let index = 0; index <= 3; index++) {
        strip.clear()
        strip.setPixelColor(index, neopixel.colors(NeoPixelColors.Red))
        strip.show()
        basic.pause(100)
    }
    for (let index = 0; index <= 3; index++) {
        strip.clear()
        strip.setPixelColor(index, neopixel.colors(NeoPixelColors.Orange))
        strip.show()
        basic.pause(100)
    }
    for (let index = 0; index <= 3; index++) {
        strip.clear()
        strip.setPixelColor(index, neopixel.colors(NeoPixelColors.Yellow))
        strip.show()
        basic.pause(100)
    }
    for (let index = 0; index <= 3; index++) {
        strip.clear()
        strip.setPixelColor(index, neopixel.colors(NeoPixelColors.Green))
        strip.show()
        basic.pause(100)
    }
    for (let index = 0; index <= 3; index++) {
        strip.clear()
        strip.setPixelColor(index, neopixel.colors(NeoPixelColors.Blue))
        strip.show()
        basic.pause(100)
    }
    for (let index = 0; index <= 3; index++) {
        strip.clear()
        strip.setPixelColor(index, neopixel.colors(NeoPixelColors.Indigo))
        strip.show()
        basic.pause(100)
    }
    for (let index = 0; index <= 3; index++) {
        strip.clear()
        strip.setPixelColor(index, neopixel.colors(NeoPixelColors.Violet))
        strip.show()
        basic.pause(100)
    }
    for (let index = 0; index <= 3; index++) {
        strip.clear()
        strip.setPixelColor(index, neopixel.colors(NeoPixelColors.Purple))
        strip.show()
        basic.pause(100)
    }
    for (let index = 0; index <= 3; index++) {
        strip.clear()
        strip.setPixelColor(index, neopixel.colors(NeoPixelColors.White))
        strip.show()
        basic.pause(100)
    }
})
