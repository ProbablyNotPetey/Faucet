



ServerEvents.recipes(event => {
    global.deleteMe.forEach(item => {
        event.remove({ output: item})
    })
})

ServerEvents.tags('item', event => {
    event.removeAllTagsFrom(global.deleteMe)
})