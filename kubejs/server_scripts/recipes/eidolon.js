
ServerEvents.recipes(event => {


    event.custom({
        type: 'hexerei:mixingcauldron',
        liquid: {
            fluid: 'minecraft:water'
        },
        ingredients: [
            Ingredient.of('minecraft:gold_ingot'),
            Ingredient.of('minecraft:gold_ingot'),
            Ingredient.of('minecraft:redstone'),
            Ingredient.of('minecraft:redstone'),
            Ingredient.of('eidolon:soul_shard')
        ],
        output: Item.of('2x eidolon:arcane_gold_ingot'),
        'liquidOutput': {
            fluid: 'minecraft:water'
        },
        'fluidLevelsConsumed': 0
    })
})