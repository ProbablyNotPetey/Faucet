ServerEvents.tags('block', event => {
    let shovelOres = new RegExp('^emendatusenigmatica:.*_(sand|gravel|clay)_ore')
    Block.getTypeList().forEach(block => {
        if (shovelOres.test(block)) {
            event.remove('minecraft:mineable/pickaxe', block)
            event.add('minecraft:mineable/shovel', block)
        }
    })
})