//priority: 100

/*
    Script by @squoshi on the KubeJS discord, some modifications made by me (vivi)
*/
function Particle(lvl) {
    let level = lvl
    let particleType
    let renderType
    let lifetime = 100
    let transparencyData = [0, 0]
    let scaleData = [1, 1]
    let spinData = [0, 0]
    let colorStart = [0, 0, 0]
    let colorEnd = [0, 0, 0]
    let position = [0, 0, 0]
    let motion = [0, 0, 0]
    let randomMotion = [0, 0, 0]
    let randomOffset = [0, 0, 0]
    let count = 1
    this.type = function (type) {
        return particleType = type
    }
    this.renderType = function (type) {
        return renderType = type
    }
    this.lifetime = function (time) {
        return lifetime = time
    }
    this.transparencyData = function (start, end) {
        return transparencyData = [start, end]
    }
    this.scaleData = function (start, end) {
        return scaleData = [start, end]
    }
    this.spinData = function (start, end) {
        return spinData = [start, end]
    }
    this.colorData = function (start, end) {
        colorStart = start
        colorEnd = end
        return colorStart, colorEnd
    }
    this.position = function (x, y, z) {
        return position = [x, y, z]
    }
    this.motion = function (x, y, z) {
        return motion = [x, y, z]
    }
    this.randomMotion = function (x, y, z) {
        return randomMotion = [x, y, z]
    }
    this.randomOffset = function (x, y, z) {
        return randomOffset = [x, y, z]
    }
    this.spawn = function (amount) {
        count = amount
        level.players().forEach(player => {
            player.sendData('particle', {
                type: particleType,
                render: renderType,
                x: position[0],
                y: position[1],
                z: position[2],
                motionX: motion[0],
                motionY: motion[1],
                motionZ: motion[2],
                randomMotionX: randomMotion[0],
                randomMotionY: randomMotion[1],
                randomMotionZ: randomMotion[2],
                randomOffsetX: randomOffset[0],
                randomOffsetY: randomOffset[1],
                randomOffsetZ: randomOffset[2],
                count: count,
                lifetime: lifetime,
                scaleStart: scaleData[0],
                scaleEnd: scaleData[1],
                spinStart: spinData[0],
                spinEnd: spinData[1],
                colorStart: colorStart,
                colorEnd: colorEnd,
                transparencyStart: transparencyData[0],
                transparencyEnd: transparencyData[1]
            })
        })
    }
}