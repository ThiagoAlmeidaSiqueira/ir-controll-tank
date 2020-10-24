makerbit.onIrButton(IrButton.Down, IrButtonAction.Pressed, function () {
    magicbit.MotorRun(magicbit.Motors.B01B02, -255)
    magicbit.MotorRun(magicbit.Motors.A03A04, -255)
})
makerbit.onIrButton(IrButton.Up, IrButtonAction.Pressed, function () {
    magicbit.MotorRun(magicbit.Motors.B01B02, 255)
    magicbit.MotorRun(magicbit.Motors.A03A04, 255)
})
makerbit.onIrButton(IrButton.Any, IrButtonAction.Pressed, function () {
	
})
makerbit.onIrButton(IrButton.Ok, IrButtonAction.Pressed, function () {
    magicbit.MotorStopAll()
})
makerbit.connectIrReceiver(DigitalPin.P1, IrProtocol.Keyestudio)
