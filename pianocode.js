let evt_value = 0
let event_id = 8888
let connected = 0
bluetooth.onBluetoothConnected(() => {
    connected = 1
    basic.showString("C")
})
bluetooth.onBluetoothDisconnected(() => {
    connected = 0
    basic.showString("D")
})
control.onEvent(event_id, EventBusValue.MICROBIT_EVT_ANY, () => {
    evt_value = control.eventValue()
    basic.showNumber(evt_value)
    if (evt_value == 1000) {
        basic.showIcon(IconNames.Heart)
        music.playTone(262, music.beat(BeatFraction.Whole))
    }
    if (evt_value == 1001) {
        basic.showIcon(IconNames.Yes)
    }
})
event_id = 8888
