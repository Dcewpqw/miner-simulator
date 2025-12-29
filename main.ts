let luck = 1
let ore = 0
let chance = 20
let auto_mine = 0
let cost_auto_mine = 100
let cost_ore_numb_up = 10
let cost_luck_up = 50
let shop = 0
let mining = 0
basic.forever(function () {
    if (input.isGesture(Gesture.Shake)) {
        mining = randint(1, chance)
        basic.pause(200)
    }
    if (mining == 1) {
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.BaDing), music.PlaybackMode.InBackground)
        ore += luck
        mining = 0
        basic.pause(200)
    }
    if (input.logoIsPressed()) {
        basic.showNumber(ore)
        basic.pause(500)
        basic.clearScreen()
    }
})
basic.forever(function () {
    if (shop == 1) {
        basic.showLeds(`
            . # . . .
            # # # . .
            . # . # #
            . # . # #
            . # . # #
            `)
    } else if (shop == 2) {
        basic.showLeds(`
            . # # . .
            # # . . .
            # . # . .
            . # . # .
            # # # . #
            `)
    } else if (shop == 3) {
        basic.showLeds(`
            . # # # .
            # . . . #
            # . # # #
            # # . . #
            . # # # .
            `)
    } else if (shop == 4) {
    	
    }
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.AB) && shop == 0) {
        basic.showLeds(`
            . # # # .
            # . . . #
            # # # # #
            # . # . #
            # # # # #
            `)
    } else if (input.buttonIsPressed(Button.A)) {
        shop += -1
        basic.pause(500)
    } else if (input.buttonIsPressed(Button.B)) {
        shop += 1
        basic.pause(500)
    } else if (input.isGesture(Gesture.Shake)) {
        basic.clearScreen()
        shop = 0
    }
})
basic.forever(function () {
    if (shop == 1 && input.logoIsPressed() && ore >= cost_ore_numb_up) {
        luck += 1
        basic.pause(100)
        ore += cost_ore_numb_up * -1
        cost_ore_numb_up += 10
    } else if (shop == 2 && input.logoIsPressed() && ore >= cost_luck_up && 1 < chance) {
        chance += -1
        basic.pause(100)
        ore += cost_luck_up * -1
        cost_luck_up += 50
    } else if (shop == 3 && input.logoIsPressed() && ore >= cost_auto_mine) {
        auto_mine += 1
        basic.pause(100)
        ore += cost_auto_mine * -1
        cost_auto_mine += 50
    } else if (shop == 4 && input.logoIsPressed() && ore >= cost_ore_numb_up) {
    	
    }
})
basic.forever(function () {
    ore += auto_mine
    basic.pause(1000)
})
