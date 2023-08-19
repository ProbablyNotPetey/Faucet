//priority: 100
const extendedmushrooms = {
    fairy_ring: (event, output, inputs, time) => {
        if(time === undefined) {
            time = 200
        }
        
        event.custom({
            type: 'extendedmushrooms:fairy_ring_recipe',
            ingredients: inputs.map(i => Ingredient.of(i).toJson()),
            result: Item.of(output).toJson(),
            recipeTime: time
        })
    }
}