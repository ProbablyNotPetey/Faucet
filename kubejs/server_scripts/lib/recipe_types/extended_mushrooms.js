//priority: 100
const extendedMushroomsFairyRing = (event, inputs, output, time) => {
    event.custom({
        type: 'extendedmushrooms:fairy_ring_recipe',
        ingredients: inputs.map(i => Ingredient.of(i).toJson()),
        result: Item.of(output).toJson(),
        recipeTime: time
    })
}