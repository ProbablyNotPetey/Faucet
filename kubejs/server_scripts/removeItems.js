



ServerEvents.recipes(event => {
    deleteMe.forEach(item => {
        event.remove({ output: item})
    })
})

ServerEvents.tags('item', event => {
    event.removeAllTagsFrom(deleteMe)
})