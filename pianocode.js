let evt_value = 0
let event_id = 8888
let connected = 0
let command = 0;
music.setTempo(300)
bluetooth.onBluetoothConnected(() => {
    connected = 1
    basic.showString("C")
})
bluetooth.onBluetoothDisconnected(() => {
    connected = 0
    basic.showString("D")
})
control.onEvent(event_id, command, () => {
    evt_value = control.eventValue()

    if (evt_value == 0) {
        music.playTone(262, music.beat(BeatFraction.Whole))
    }
    if (evt_value == 1) {
        music.playTone(277, music.beat(BeatFraction.Whole))
    }
    if (evt_value == 2) {
        music.playTone(294, music.beat(BeatFraction.Whole))
    }
    if (evt_value == 3) {
        music.playTone(311, music.beat(BeatFraction.Whole))
    }
    if (evt_value == 4) {
        music.playTone(330, music.beat(BeatFraction.Whole))
    }
    if (evt_value == 5) {
        music.playTone(349, music.beat(BeatFraction.Whole))
    }
    if (evt_value == 6) {
        music.playTone(370, music.beat(BeatFraction.Whole))
    }
    if (evt_value == 7) {
        music.playTone(392, music.beat(BeatFraction.Whole))
    }
    if (evt_value == 8) {
        music.playTone(415, music.beat(BeatFraction.Whole))
    }
    if (evt_value == 9) {
        music.playTone(440, music.beat(BeatFraction.Whole))
    }
    if (evt_value == 10) {
        music.playTone(446, music.beat(BeatFraction.Whole))
    }
    if (evt_value == 11) {
        music.playTone(494, music.beat(BeatFraction.Whole))
    }
    if (evt_value == 12) {
        music.playTone(523, music.beat(BeatFraction.Whole))
    }
    if (evt_value == 13) {
        music.playTone(554, music.beat(BeatFraction.Whole))
    }
    if (evt_value == 14) {
        music.playTone(587, music.beat(BeatFraction.Whole))
    }
    if (evt_value == 15) {
        music.playTone(622, music.beat(BeatFraction.Whole))
    }
    if (evt_value == 16) {
        music.playTone(659, music.beat(BeatFraction.Whole))
    }
    if (evt_value == 17) {
        music.playTone(698, music.beat(BeatFraction.Whole))
    }
    if (evt_value == 18) {
        music.playTone(740, music.beat(BeatFraction.Whole))
    }
    if (evt_value == 19) {
        music.playTone(784, music.beat(BeatFraction.Whole))
    }
    if (evt_value == 20) {
        music.playTone(831, music.beat(BeatFraction.Whole))
    }
    if (evt_value == 21) {
        music.playTone(880, music.beat(BeatFraction.Whole))
    }
    if (evt_value == 22) {
        music.playTone(932, music.beat(BeatFraction.Whole))
    }
    if (evt_value == 23) {
        music.playTone(988, music.beat(BeatFraction.Whole))
    }
    if (evt_value == 24) {
        music.playTone(1047, music.beat(BeatFraction.Whole))
    }
    if (evt_value == 25) {
        music.playTone(1109, music.beat(BeatFraction.Whole))
    }
})
event_id = 8888

