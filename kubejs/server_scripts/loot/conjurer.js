const $PatternScroll = Java.loadClass("at.petrak.hexcasting.common.loot.PatternScrollFunc")

LootJS.modifiers(event => {

    let ps = new $PatternScroll([])

    event.addEntityLootModifier('conjurer_illager:conjurer')
        .addLoot(LootEntry.of('hexcasting:scroll').addFunction(ps))
        .addLoot(LootEntry.of('ars_nouveau:source_gem').limitCount([5, 21]))
})