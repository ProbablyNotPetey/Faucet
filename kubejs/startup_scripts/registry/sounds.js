// const $DeferredRegister = Java.loadClass('net.minecraftforge.registries.DeferredRegister')
// const $Registry = Java.loadClass('net.minecraft.core.Registry')
// const $ForgeRegistries = Java.loadClass('net.minecraftforge.registries.ForgeRegistries')
// const $EventBuses = Java.loadClass('dev.architectury.platform.forge.EventBuses')
// const $SoundEvent = Java.loadClass('net.minecraft.sounds.SoundEvent')

// const SOUND_EVENTS = $DeferredRegister['create(net.minecraftforge.registries.IForgeRegistry,java.lang.String)']($ForgeRegistries.SOUND_EVENTS, 'kubejs')

// const WEEPING_WELL_CLOSE = SOUND_EVENTS['register(java.lang.String,java.util.function.Supplier)']('weeping_well_close', () => new $SoundEvent('kubejs:weeping_well_close'))

// StartupEvents.init(event => {

//     SOUND_EVENTS['register(net.minecraftforge.eventbus.api)']($EventBuses.getModEventBus('kubejs').get())

// })


StartupEvents.registry('sound_event', event => {
    event.create('weeping_well_close')
})