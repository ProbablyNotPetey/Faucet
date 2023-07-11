ServerEvents.commandRegistry(event => {
    const { commands: Commands, arguments: Arguments } = event
    event.register(
        Commands.literal("dumpInventory")
        .requires(source => source.hasPermission(2))
        .executes(ctx => {
            let player = ctx.source.getPlayer()
            let inventory = player.getInventory()
            let output = []

            inventory.allItems.forEach(item => {
                output.push(item.toItemString())
            })

            // player.displayClientMessage(Component.literal(output), true)
            console.log(output)

            return 1
        })
    )
})