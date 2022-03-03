input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Meh)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Heart)
})
basic.forever(function () {
    if (input.logoIsPressed()) {
        basic.showIcon(IconNames.TShirt)
    }
})
