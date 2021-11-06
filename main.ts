makerbit.onIrButton(IrButton.Number_3, IrButtonAction.Pressed, function () {
    basic.showLeds(`
        . . # . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
makerbit.onIrButton(IrButton.Number_8, IrButtonAction.Pressed, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . # . . .
        . . . . .
        . . . . .
        `)
})
makerbit.onIrButton(IrButton.Hash, IrButtonAction.Pressed, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        `)
})
makerbit.onIrButton(IrButton.Number_0, IrButtonAction.Pressed, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . # . . .
        . . . . .
        `)
})
makerbit.onIrButton(IrButton.Number_1, IrButtonAction.Pressed, function () {
    basic.showLeds(`
        # . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
makerbit.onIrButton(IrButton.Number_4, IrButtonAction.Pressed, function () {
    basic.showLeds(`
        . . . . .
        # . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
makerbit.onIrButton(IrButton.Number_5, IrButtonAction.Pressed, function () {
    basic.showLeds(`
        . . . . .
        . # . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
makerbit.onIrButton(IrButton.Number_6, IrButtonAction.Pressed, function () {
    basic.showLeds(`
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
makerbit.onIrButton(IrButton.Left, IrButtonAction.Pressed, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        # # . . .
        . . . . .
        . . . . .
        `)
})
makerbit.onIrButton(IrButton.Number_7, IrButtonAction.Pressed, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        # . . . .
        . . . . .
        . . . . .
        `)
})
makerbit.onIrButton(IrButton.Down, IrButtonAction.Pressed, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . # . .
        . . # . .
        `)
})
makerbit.onIrButton(IrButton.Star, IrButtonAction.Pressed, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        # . . . .
        . . . . .
        `)
})
makerbit.onIrButton(IrButton.Up, IrButtonAction.Pressed, function () {
    basic.showLeds(`
        . . # . .
        . . # . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
makerbit.onIrButton(IrButton.Number_2, IrButtonAction.Pressed, function () {
    basic.showLeds(`
        . # . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
makerbit.onIrButton(IrButton.Right, IrButtonAction.Pressed, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . # #
        . . . . .
        . . . . .
        `)
})
makerbit.onIrButton(IrButton.Ok, IrButtonAction.Pressed, function () {
    basic.showLeds(`
        . . . . .
        . . # . .
        . # # # .
        . . # . .
        . . . . .
        `)
})
makerbit.onIrButton(IrButton.Number_9, IrButtonAction.Pressed, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
})
makerbit.onIrButton(IrButton.Unused_2, IrButtonAction.Pressed, function () {
    basic.showLeds(`
        . . . . #
        . . . # .
        . . . . .
        . . . . .
        . . . . .
        `)
})
makerbit.connectIrReceiver(DigitalPin.P2, IrProtocol.Keyestudio)
basic.showIcon(IconNames.Square)
