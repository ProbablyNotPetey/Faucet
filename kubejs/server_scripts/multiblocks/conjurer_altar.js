
BlockEvents.rightClicked('eidolon:straw_effigy', event => {

    if(event.getItem() != 'minecraft:emerald' || event.getLevel().isClientSide() || !event.getPlayer().crouching) {
        return
    }
    let pos = event.getBlock().getPos()
    let level = event.getLevel()

    let rotation = global.MULTIBLOCKS.CONJURER_ALTAR().validate(level, pos)
    if(rotation === null) {
        return
    }

    // console.info('clicked on multiblock!')
    event.getPlayer().swing()

    BlockPos.betweenClosed(pos.offset(1, 0, 1), pos.offset(-1, -1, -1)).forEach(p => {
        level.setBlock(p, Block.getBlock('minecraft:air').defaultBlockState(), 3)
        funkierAhhParticles(level, p.offset(0.5, 0.0, 0.5), [76, 59, 84])
    })



    level.getEntities(null, AABB.of(pos.x, pos.y, pos.z, pos.x, pos.y, pos.z).inflate(8.0)).forEach(entity => {
        if(entity instanceof $Player) {
            entity.sendData('screenshake', {
                i1: 0.5,
                i2: 0.75,
                i3: 0.5,
                duration: 100,
                easeStart: 'QUAD_IN_OUT',
                easeEnd: 'SINE_IN_OUT'
            })
        }
    })

    event.getServer().runCommandSilent(`open_gateway ${pos.x} ${pos.y} ${pos.z} faucet:conjurer`)
    
    level.playSound(null, pos, 'minecraft:entity.lightning_bolt.impact', 'blocks', 1.0, 0.5)
    level.playSound(null, pos, 'minecraft:entity.lightning_bolt.thunder', 'blocks', 1.0, 0.5)

    event.getItem().shrink(1)


})