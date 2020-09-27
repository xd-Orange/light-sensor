basic.forever(function () {
    if (input.lightLevel() < 100) {
        while (input.lightLevel() < 100) {
            basic.showLeds(`
                . . . . .
                . # # # .
                . # # # .
                . # # # .
                . . . . .
                `)
            basic.showLeds(`
                # . # . #
                . # # # .
                . # # # .
                . # # # .
                # . # . #
                `)
        }
    } else {
        basic.clearScreen()
    }
})
