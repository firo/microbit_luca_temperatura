input.onButtonPressed(Button.A, function () {
    basic.showString("Hello!")
    if (input.temperature() > 30) {
        basic.showIcon(IconNames.Surprised)
    } else if (input.temperature() > 10) {
        basic.showIcon(IconNames.Happy)
    } else {
        basic.showIcon(IconNames.Sad)
    }
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
})
basic.forever(function () {
	
})
