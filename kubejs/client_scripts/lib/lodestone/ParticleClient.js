
/*
    Script by @squoshi on the KubeJS discord, some modifications made by me (vivi)
*/

const $WorldParticleBuilder = Java.loadClass('team.lodestar.lodestone.systems.particle.WorldParticleBuilder')
const $LodestoneParticleRegistry = Java.loadClass('team.lodestar.lodestone.registry.common.particle.LodestoneParticleRegistry')
const $GenericParticleData = Java.loadClass('team.lodestar.lodestone.systems.particle.data.GenericParticleData')
const $SpinParticleData = Java.loadClass('team.lodestar.lodestone.systems.particle.data.SpinParticleData')
const $ColorParticleData = Java.loadClass('team.lodestar.lodestone.systems.particle.data.ColorParticleData')
const $SimpleParticleOptions = Java.loadClass('team.lodestar.lodestone.systems.particle.SimpleParticleOptions')
const $LodestoneWorldParticleRenderType = Java.loadClass('team.lodestar.lodestone.systems.particle.world.LodestoneWorldParticleRenderType')
const $Easing = Java.loadClass('team.lodestar.lodestone.systems.easing.Easing')
const $Color = Java.loadClass('java.awt.Color')


NetworkEvents.dataReceived('particle', event => {
    const { level, data } = event
    let type
    switch (data.type) {
        case 'WISP': {
            type = $LodestoneParticleRegistry.WISP_PARTICLE
            break
        };
        case 'SMOKE': {
            type = $LodestoneParticleRegistry.SMOKE_PARTICLE
            break
        };
        case 'SPARKLE': {
            type = $LodestoneParticleRegistry.SPARKLE_PARTICLE
            break
        };
        case 'TWINKLE': {
            type = $LodestoneParticleRegistry.TWINKLE_PARTICLE
            break
        };
        case 'STAR': {
            type = $LodestoneParticleRegistry.STAR_PARTICLE
            break
        }
    }
    let renderType
    switch (data.render) {
        case 'ADDITIVE': {
            renderType = $LodestoneWorldParticleRenderType.ADDITIVE
            break
        }
        case 'LUMITRANSPARENT': {
            renderType = $LodestoneWorldParticleRenderType.LUMITRANSPARENT
            break
        }
        case 'TRANSPARENT': {
            renderType = $LodestoneWorldParticleRenderType.TRANSPARENT
            break
        }
    }
    const colorStart = data.colorStart
    const colorEnd = data.colorEnd
    $WorldParticleBuilder['create(net.minecraftforge.registries.RegistryObject)'](type)
        .setTransparencyData($GenericParticleData.create(data.transparencyStart, data.transparencyEnd).build())
        .setScaleData($GenericParticleData.create(data.scaleStart, data.scaleEnd).build())
        .setSpinData($SpinParticleData.create(data.spinStart, data.spinEnd).setEasing($Easing.QUAD_OUT).build())
        .setColorData($ColorParticleData.create($Color(colorStart[0] / 255, colorStart[1] / 255, colorStart[2] / 255), $Color(colorEnd[0] / 255, colorEnd[1] / 255, colorEnd[2] / 255)).build())
        .setLifetime(data.lifetime)
        .setRandomOffset(data.randomOffsetX, data.randomOffsetY, data.randomOffsetZ)
        .addMotion(data.motionX, data.motionY, data.motionZ)
        .setRandomMotion(data.randomMotionX, data.randomMotionY, data.randomMotionZ)
        .setDiscardFunction($SimpleParticleOptions.ParticleDiscardFunctionType.INVISIBLE)
        .setRenderType(renderType)
        .repeat(level, data.x, data.y, data.z, data.count)
})