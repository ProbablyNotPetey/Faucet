const deleteMe = [
    'mekanism:ingot_steel',
    'ad_astra:steel_ingot',
    'immersiveengineering:ingot_steel',
    'immersiveengineering:storage_steel',
    'immersiveengineering:nugget_steel',
    'immersiveengineering:plate_steel',
    'immersiveengineering:dust_steel',
    'immersiveengineering:stick_steel',
    'ad_astra:steel_block',
    'ad_astra:steel_plate',
    'ad_astra:steel_nugget',
    'mekanism:nugget_steel',
    'mekanism:nugget_steel', 
    'mekanism:dust_steel', 
    'mekanism:block_steel',
    'thermal:steel_plate', 
    'thermal:steel_dust', 
    'thermal:steel_block', 
    'thermal:steel_nugget', 
    'thermal:steel_ingot', 
    'thermal:steel_gear',

]



ServerEvents.recipes(event => {
    deleteMe.forEach(item => {
        event.remove({ output: item})
    })
})

ServerEvents.tags('item', event => {
    event.removeAllTagsFrom(deleteMe)
})