const $SoundType = Java.loadClass('net.minecraft.world.level.block.SoundType')

BlockEvents.modification(event => {
    event.modify('/^emendatusenigmatica:.*_deepslate_ore/', block => {
        block.soundType = $SoundType.DEEPSLATE
    })
    event.modify('/^emendatusenigmatica:.*_sand_ore/', block => {
        block.soundType = $SoundType.SAND
    })
    event.modify('/^emendatusenigmatica:.*_(gravel|clay)_ore/', block => {
        block.soundType = $SoundType.GRAVEL
    })
})