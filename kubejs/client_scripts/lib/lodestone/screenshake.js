const $ScreenshakeInstance = Java.loadClass('team.lodestar.lodestone.systems.screenshake.ScreenshakeInstance')
const $ScreenshakeHandler = Java.loadClass('team.lodestar.lodestone.handlers.ScreenshakeHandler')


NetworkEvents.dataReceived('screenshake', event => {
    const { i1, i2, i3, duration } = event.data
    let easeStart = global.assignEasing(event.data.easeStart)
    let easeEnd = global.assignEasing(event.data.easeEnd)

    $ScreenshakeHandler.addScreenshake($ScreenshakeInstance(duration).setIntensity(i1, i2, i3).setEasing(easeStart, easeEnd))
})

