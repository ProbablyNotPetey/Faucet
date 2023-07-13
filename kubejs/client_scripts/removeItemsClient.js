console.info('Removing items from REI...')


REIEvents.hide('item', event => {
    console.log('peepeepoopoo')

    global.deleteMe.forEach(item => {
        console.log(item)
        event.hide(item)
    })
})

REIEvents.information(event => {
    global.deleteMe.forEach(item => {
        event.addItem(item, 'Disabled', ['This item is disabled.', 'Please report on github if you', 'somehow obtain this item.'])
    })
})