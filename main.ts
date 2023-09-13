radio.onReceivedValue(function (name, value) {
    if (name == "mask_x" && value - 5 >= 0) {
        mask_x = value - 5
    } else if (name == "mask_y") {
        mask_y = value
    } else if (name == "x" && value - 5 >= 0) {
        x = value - 5
    } else {
        y = value
    }
    if (name.includes("mask") && value - 5 >= 0) {
        mask.push([mask_x, mask_y])
        mask.shift()
    } else {
    	
    }
})
let y = 0
let x = 0
let mask_y = 0
let mask_x = 0
let mask: number[][] = []
radio.setGroup(76)
mask = [[2, 2]]
basic.forever(function () {
    basic.clearScreen()
    for (let value of mask) {
        led.plot(value[0], value[1])
    }
    led.plot(x, y)
})
