input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Chessboard)
    if (Math.randomBoolean()) {
        basic.showIcon(IconNames.Yes)
    } else {
        basic.showIcon(IconNames.No)
    }
})
