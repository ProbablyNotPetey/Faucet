const $UUID = Java.loadClass('java.util.UUID')

ItemEvents.modification(event => {
    let palladiumArmor = [
        'emendatusenigmatica:palladium_helmet',
        'emendatusenigmatica:palladium_chestplate',
        'emendatusenigmatica:palladium_leggings',
        'emendatusenigmatica:palladium_boots'
    ]
    palladiumArmor.forEach(armor => {
        event.modify(armor, item => {
            item.addAttribute('minecraft:generic.max_health', $UUID.randomUUID(), 'Health Penalty', -1.0, 'addition')
            item.addAttribute('minecraft:generic.knockback_resistance', $UUID.randomUUID(), 'KB Resistance', 0.25, 'addition')
        })
    })
})