input.onButtonPressed(Button.A, function () {
    Binary = "" + Binary + "1"
    basic.showString(Binary)
    Decimal = Decimal * 2 + 1
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(Decimal)
})
input.onButtonPressed(Button.B, function () {
    Binary = "" + Binary + "0"
    basic.showString(Binary)
    Decimal = Decimal * 2
})
let Decimal = 0
let Binary = ""
Binary = ""
Decimal = 0
