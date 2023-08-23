
ServerEvents.recipes(event => {

    //pizza and beef wellington in oven
    event.custom({
        type: 'bakery:stove',
        ingredients: [
            {
                item: 'candlelight:bolognese'
            },
            {
                tag: 'candlelight:dough'
            },
            {
                item: 'candlelight:mushroom_soup'
            }
        ],
        item: 'candlelight:beef_wellington',
        count: 1,
        experience: 0.7
    })
    event.custom({
        type: 'bakery:stove',
        ingredients: [
            {
                item: 'farmersdelight:tomato_sauce'
            },
            {
                tag: 'forge:dough'
            },
            {
                tag: 'forge:cheese'
            }
        ],
        item: 'candlelight:pizza',
        count: 1,
        experience: 0.7
    })
    //bolognese sauce
    event.custom({
        type: 'farmersdelight:cooking',
        cookingTime: 200,
        experience: 0.35,
        ingredients: [
            {
                item: 'farmersdelight:tomato_sauce'
            },
            {
                tag: 'candlelight:cooked_beef'
            },
            {
                tag: 'candlelight:red_effect'
            }
        ],
        recipe_book_tab: 'meals',
        container: {
            item: 'minecraft:bowl'
        },
        result: {
            item: 'candlelight:bolognese'
        }
    })
    //pasta tomato
    event.custom({
        type: 'farmersdelight:cooking',
        cookingTime: 200,
        experience: 0.35,
        ingredients: [
            {
                tag: 'forge:pasta'
            },
            {
                item: 'farmersdelight:tomato_sauce'
            },
            {
                tag: 'candlelight:red_effect'
            }
        ],
        recipe_book_tab: 'meals',
        container: {
            item: 'minecraft:bowl'
        },
        result: {
            item: 'candlelight:pasta'
        }
    })













    // =============================================================================================================== //


    let blacklistedRecipes = [
        'candlelight:pan_cooking/pizza',
        'candlelight:pan_cooking/beef_wellington',
        'candlelight:pan_cooking/bolognese',
        'candlelight:pot_cooking/pasta',

        
        'candlelight:pot_cooking/tomato_sauce',
        'candlelight:pot_cooking/raw_pasta'
    ]

    //convert all remaining cooking pot and cooking pan recipes (from Candlelight AND Bakery) to Farmer's Delight Cooking Pot
    event.forEachRecipe([{ type: 'candlelight:pan_cooking'}, { type: 'candlelight:pot_cooking' }, { type: 'bakery:pot_cooking' }], recipe => {

        if(blacklistedRecipes.includes(recipe.getId())) {
            return
        }

        // console.log(recipe.getId())


        let recipeJson = recipe.json
        let recipeIngredients = recipeJson.getAsJsonArray('ingredients')
        let recipeContainer = recipeJson.get('container')
        let oldResult = recipeJson.getAsJsonObject('result')
        let recipeResult = {
            item: oldResult.get('item'),
            count: (oldResult.has('count') ? oldResult.get('count') : 1)
        }
        let recipeXp = (oldResult.has('experience') ? oldResult.get('experience') : 0.0)
        
        event.custom({
            type: 'farmersdelight:cooking',
            cookingTime: 200,
            experience: recipeXp,
            ingredients: recipeIngredients,
            container: recipeContainer,
            recipe_book_tab: 'meals',
            result: recipeResult
        })


    })


    event.remove([{ type: 'candlelight:pan_cooking'}, { type: 'candlelight:pot_cooking' }, { type: 'bakery:pot_cooking' }])
})