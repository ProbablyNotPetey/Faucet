
ServerEvents.recipes(event => {

    let blacklistedRecipes = [

    ]

    event.forEachRecipe([{ type: 'architects_palette:warping'}], recipe => {
        if(blacklistedRecipes.includes(recipe.getId())) {
            return
        }

        let recipeJson = recipe.json
        let recipeIngredient = recipeJson.getAsJsonArray('ingredient').get(0).getAsJsonObject()
        recipeIngredient['addProperty(java.lang.String,java.lang.Number)']('count', 1)
        let recipeResult = recipeJson.getAsJsonObject('result')

        event.custom({
            type: 'malum:favor_of_the_void',
            input: recipeIngredient,
            output: recipeResult
        })

    })
})