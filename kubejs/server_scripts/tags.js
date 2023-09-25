const $Registry = Java.loadClass("net.minecraft.core.Registry")

ServerEvents.tags('block', event => {
    
    $Registry.BLOCK.getTagNames().forEach(tag => {
        
        console.log(tag.location())
        
        // if(event.get(rLoc).getObjectIds().contains('minecraft:ice')) {
        //     console.log('tag contains ice')
        //     event.add(rLoc, 'ecologics:thin_ice')
        //     event.add(rLoc, 'immersiveweathering:thin_ice')

        // }
    })
})