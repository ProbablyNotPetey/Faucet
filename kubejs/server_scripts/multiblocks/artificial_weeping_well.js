const $Block = Java.loadClass('net.minecraft.world.level.block.Block')
const $Player = Java.loadClass('net.minecraft.world.entity.player.Player')

const $ParticleEffectTypeRegistry = Java.loadClass('com.sammy.malum.registry.common.ParticleEffectTypeRegistry')



const $MalumPacketRegistry = Java.loadClass('com.sammy.malum.registry.common.PacketRegistry')
const $BlockSparkleParticlePacket = Java.loadClass('com.sammy.malum.common.packets.particle.curiosities.rite.generic.BlockSparkleParticlePacket')
const $PacketDistributor = Java.loadClass('net.minecraftforge.network.PacketDistributor')
const $Color = Java.loadClass('java.awt.Color')





BlockEvents.rightClicked('malum:blighted_soil', event => {
    if(event.getItem() != 'malum:corrupted_resonance' || event.getLevel().isClientSide() || !event.getPlayer().crouching) {
        return
    }
    let pos = event.getBlock().getPos()
    let level = event.getLevel()

    let rotation = global.MULTIBLOCKS.ARTIFICIAL_WEEPING_WELL().validate(level, pos)
    if(rotation === null) {
        return
    }

    console.info('clicked on multiblock!')
    event.getPlayer().swing()

    BlockPos.betweenClosed(pos.offset(1, 0, 1), pos.offset(-1, -3, -1)).forEach(p => {
        level.setBlock(p, Block.getBlock('malum:primordial_soup').defaultBlockState(), 3)
    })
    level.setBlock(pos, Block.getBlock('malum:void_conduit').defaultBlockState(), 2)

    let lightning = event.getBlock().createEntity('minecraft:lightning_bolt')
    lightning.x += 0.5
    lightning.z += 0.5
    lightning.spawn()

    funkyAhhParticles(level, pos)


    level.getEntities(null, AABB.of(pos.x, pos.y, pos.z, pos.x, pos.y, pos.z).inflate(8.0)).forEach(entity => {
        if(entity instanceof $Player) {
            entity.sendData('screenshake', {
                i1: 0.5,
                i2: 0.75,
                i3: 0.5,
                duration: 40,
                easeStart: 'QUARTIC_OUT',
                easeEnd: 'SINE_IN_OUT'
            })
        }
    }) 

    event.getItem().shrink(1)

})

PlayerEvents.tick(event => {
    if(event.getLevel().isClientSide()) {
        return
    }

    checkForWeepingWellRemoval(event.getPlayer(), event.getLevel(), 12.0)
})

function checkForWeepingWellRemoval(player, level, range) {

    let entity = null

    //can't break out of a forEach loop and rhino doesn't support for-of loops
    let entities = level.getEntities(player, player.getBoundingBox().inflate(range))
    for(let i = 0; i < entities.size(); i++) {
        if(entities[i].getType() == 'minecraft:item') {

            let itemEntity = entities[i]
            let block = level.getBlockState(itemEntity.blockPosition())

            if(itemEntity.getItem().is('forbidden_arcanus:wet_purifying_soap') && (block.is('malum:primordial_soup') || block.is('malum:void_conduit'))) {
                entity = itemEntity
                break
            }
        }        
    }

    if(entity !== null) {

        BlockPos.betweenClosed(entity.blockPosition().offset(1, 1, 1), entity.blockPosition().offset(-1, -1, -1)).forEach(pos => {
            if(level.getBlockState(pos).is('malum:void_conduit')) {
        

                BlockPos.betweenClosed(pos.offset(1, 0, 1), pos.offset(-1, -3, -1)).forEach(pos2 => {
                    
                    let block = level.getBlockState(pos2)
                    if(block.is('malum:primordial_soup') || block.is('malum:void_conduit')) {
                        // level.levelEvent(2001, pos2, $Block.getId(block))
                        level.setBlock(pos2, Block.getBlock('minecraft:air').defaultBlockState(), 3)
                    }
                    
                })

                BlockPos.betweenClosed(pos.offset(2, 1, 2), pos.offset(-2, 1, -2)).forEach(pos2 => {

                    let block = level.getBlockState(pos2)
                    if(block.is('malum:weeping_well_core') || block.is('malum:weeping_well_corner') || block.is('malum:weeping_well_side')) {
                        level.setBlock(pos2, Block.getBlock('minecraft:deepslate').defaultBlockState(), 3)

                        let smokeParticle = new Particle(level)
                        smokeParticle.colorData([21, 18, 24], [0, 0, 0])
                        smokeParticle.lifetime(40)
                        smokeParticle.motion(0, -0.01, 0)
                        smokeParticle.position(pos2.x + 0.5, pos2.y + 1.5, pos2.z + 0.5)
                        smokeParticle.randomOffset(0.5, 0.0, 0.5)
                        smokeParticle.scaleData(0.75, 0.75)
                        smokeParticle.transparencyData(0.25, 0)
                        smokeParticle.type('SMOKE')
                        smokeParticle.renderType('LUMITRANSPARENT')
                        smokeParticle.spawn(5)

                        funkierAhhParticles(level, pos2.offset(0.5, 1.5, 0.5), [76, 59, 84])

                    }
                })

                entity.getItem().shrink(1)

                funkyAhhParticles(level, pos)

                let twinkleParticle = new Particle(level)
                twinkleParticle.colorData([236, 204, 252], [210, 120, 255])
                twinkleParticle.lifetime(60)
                twinkleParticle.motion(0, 0.06, 0)
                twinkleParticle.position(pos.x + 0.5, pos.y + 0.5, pos.z + 0.5)
                twinkleParticle.randomMotion(0.01, 0.001, 0.01)
                twinkleParticle.randomOffset(2.5, 0.0, 2.5)
                twinkleParticle.scaleData(0.3, 0)
                twinkleParticle.spinData(0.3, 0.0)
                twinkleParticle.transparencyData(0.6, 0)
                twinkleParticle.type('STAR')
                twinkleParticle.renderType('ADDITIVE')
                twinkleParticle.spawn(30)

                let smokeParticle = new Particle(level)
                smokeParticle.colorData([21, 18, 24], [0, 0, 0])
                smokeParticle.lifetime(100)
                smokeParticle.motion(0, -0.01, 0)
                smokeParticle.position(pos.x + 0.5, pos.y + 0.5, pos.z + 0.5)
                smokeParticle.randomOffset(4.0, 0.0, 4.0)
                // smokeParticle.scaleData(0.5, 0)
                smokeParticle.transparencyData(0.5, 0)
                smokeParticle.type('SMOKE')
                smokeParticle.renderType('LUMITRANSPARENT')
                smokeParticle.spawn(100)
                



                
                // level.playSound(null, pos, 'minecraft:entity.generic.explode', 'blocks', 1.0, 0.65)
                // level.playSound(null, pos, 'malum:the_deep_beckons', 'blocks', 2.0, 0.65)
                level.playSound(null, pos, 'kubejs:weeping_well_close', 'blocks', 1.0, 1.0)
                level.playSound(null, pos, 'minecraft:entity.lightning_bolt.thunder', 'blocks', 1.0, 0.5)

                // let lightning = level.createEntity('minecraft:lightning_bolt')
                // lightning.x = pos.x += 0.5
                // lightning.y = pos.y
                // lightning.z = pos.z += 0.5
                // lightning.spawn()

                return
            }
        })
    }

}

function funkyAhhParticles(level, pos) {
    $ParticleEffectTypeRegistry.WEEPING_WELL_REACTS.createPositionedEffect(level, pos.x + 0.5, pos.y + 0.75, pos.z + 0.5)
}

function funkierAhhParticles(level, pos, color) {
    $MalumPacketRegistry.MALUM_CHANNEL.send($PacketDistributor.TRACKING_CHUNK.with(() => level.getChunkAt(pos)), new $BlockSparkleParticlePacket(new $Color(color[0] / 255, color[1] / 255, color[2] / 255), pos))
}