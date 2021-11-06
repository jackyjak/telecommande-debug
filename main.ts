makerbit.onIrButton(IrButton.Number_3, IrButtonAction.Pressed, function () {
    serial.writeLine("3 == " + id2str(makerbit.irButton()))
    basic.showLeds(`
        . . # . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
makerbit.onIrButton(IrButton.Number_8, IrButtonAction.Pressed, function () {
    serial.writeLine("8 == " + id2str(makerbit.irButton()))
    basic.showLeds(`
        . . . . .
        . . . . .
        . # . . .
        . . . . .
        . . . . .
        `)
})
makerbit.onIrButton(IrButton.Hash, IrButtonAction.Pressed, function () {
    serial.writeLine("# == " + id2str(makerbit.irButton()))
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        `)
})
makerbit.onIrButton(IrButton.Number_0, IrButtonAction.Pressed, function () {
    serial.writeLine("0 == " + id2str(makerbit.irButton()))
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . # . . .
        . . . . .
        `)
})
makerbit.onIrButton(IrButton.Number_1, IrButtonAction.Pressed, function () {
    serial.writeLine("1 == " + id2str(makerbit.irButton()))
    basic.showLeds(`
        # . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
makerbit.onIrButton(IrButton.Number_4, IrButtonAction.Pressed, function () {
    serial.writeLine("4 == " + id2str(makerbit.irButton()))
    basic.showLeds(`
        . . . . .
        # . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
makerbit.onIrButton(IrButton.Number_5, IrButtonAction.Pressed, function () {
    serial.writeLine("5 == " + id2str(makerbit.irButton()))
    basic.showLeds(`
        . . . . .
        . # . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
makerbit.onIrButton(IrButton.Number_6, IrButtonAction.Pressed, function () {
    serial.writeLine("6 == " + id2str(makerbit.irButton()))
    basic.showLeds(`
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
// makerbit.onIrButton(IrButton.Any, IrButtonAction.Released, function () {
// serial.writeString("released--")
// serial.writeString("" + (id2str(makerbit.irButton())))
// serial.writeString("--")
// serial.writeValue(makerbit.irDatagram(), makerbit.irButton())
// })
makerbit.onIrButton(IrButton.Left, IrButtonAction.Pressed, function () {
    serial.writeLine("L == " + id2str(makerbit.irButton()))
    basic.showLeds(`
        . . . . .
        . . . . .
        # # . . .
        . . . . .
        . . . . .
        `)
})
makerbit.onIrButton(IrButton.Number_7, IrButtonAction.Pressed, function () {
    serial.writeLine("7 == " + id2str(makerbit.irButton()))
    basic.showLeds(`
        . . . . .
        . . . . .
        # . . . .
        . . . . .
        . . . . .
        `)
})
makerbit.onIrButton(IrButton.Down, IrButtonAction.Pressed, function () {
    serial.writeLine("D == " + id2str(makerbit.irButton()))
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . # . .
        . . # . .
        `)
})
makerbit.onIrButton(IrButton.Star, IrButtonAction.Pressed, function () {
    serial.writeLine("* == " + id2str(makerbit.irButton()))
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        # . . . .
        . . . . .
        `)
})
makerbit.onIrButton(IrButton.Up, IrButtonAction.Pressed, function () {
    serial.writeLine("U == " + id2str(makerbit.irButton()))
    basic.showLeds(`
        . . # . .
        . . # . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
// makerbit.onIrButton(IrButton.Any, IrButtonAction.Pressed, function () {
// serial.writeString("pressed---")
// serial.writeString("" + (id2str(makerbit.irButton())))
// serial.writeString("--")
// serial.writeValue(makerbit.irDatagram(), makerbit.irButton())
// })
makerbit.onIrButton(IrButton.Number_2, IrButtonAction.Pressed, function () {
    serial.writeLine("2 == " + id2str(makerbit.irButton()))
    basic.showLeds(`
        . # . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
makerbit.onIrButton(IrButton.Right, IrButtonAction.Pressed, function () {
    serial.writeLine("R == " + id2str(makerbit.irButton()))
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . # #
        . . . . .
        . . . . .
        `)
})
makerbit.onIrButton(IrButton.Ok, IrButtonAction.Pressed, function () {
    serial.writeLine("X == " + id2str(makerbit.irButton()))
    basic.showLeds(`
        . . . . .
        . . # . .
        . # # # .
        . . # . .
        . . . . .
        `)
})
function id2str (id: number) {
    if (makerbit.irButton() == makerbit.irButtonCode(IrButton.Number_1)) {
        return "1"
    } else if (makerbit.irButton() == makerbit.irButtonCode(IrButton.Number_2)) {
        return "2"
    } else if (makerbit.irButton() == makerbit.irButtonCode(IrButton.Number_3)) {
        return "3"
    } else if (makerbit.irButton() == makerbit.irButtonCode(IrButton.Number_4)) {
        return "4"
    } else if (makerbit.irButton() == makerbit.irButtonCode(IrButton.Number_5)) {
        return "5"
    } else if (makerbit.irButton() == makerbit.irButtonCode(IrButton.Number_6)) {
        return "6"
    } else if (makerbit.irButton() == makerbit.irButtonCode(IrButton.Number_7)) {
        return "7"
    } else if (makerbit.irButton() == makerbit.irButtonCode(IrButton.Number_8)) {
        return "8"
    } else if (makerbit.irButton() == makerbit.irButtonCode(IrButton.Number_9)) {
        return "9"
    } else if (makerbit.irButton() == makerbit.irButtonCode(IrButton.Number_0)) {
        return "0"
    } else if (makerbit.irButton() == makerbit.irButtonCode(IrButton.Star)) {
        return "*"
    } else if (makerbit.irButton() == makerbit.irButtonCode(IrButton.Hash)) {
        return "#"
    } else if (makerbit.irButton() == makerbit.irButtonCode(IrButton.Up)) {
        return "U"
    } else if (makerbit.irButton() == makerbit.irButtonCode(IrButton.Down)) {
        return "D"
    } else if (makerbit.irButton() == makerbit.irButtonCode(IrButton.Left)) {
        return "L"
    } else if (makerbit.irButton() == makerbit.irButtonCode(IrButton.Right)) {
        return "R"
    } else if (makerbit.irButton() == makerbit.irButtonCode(IrButton.Ok)) {
        return "X"
    } else {
        return "?"
    }
}
makerbit.onIrButton(IrButton.Number_9, IrButtonAction.Pressed, function () {
    serial.writeLine("9 == " + id2str(makerbit.irButton()))
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
})
makerbit.onIrButton(IrButton.Unused_2, IrButtonAction.Pressed, function () {
    serial.writeLine("2 == " + id2str(makerbit.irButton()))
    basic.showLeds(`
        . . . . #
        . . . # .
        . . . . .
        . . . . .
        . . . . .
        `)
})
serial.writeLine("telecommande-debug")
makerbit.connectIrReceiver(DigitalPin.P2, IrProtocol.NEC)
basic.showIcon(IconNames.Square)
