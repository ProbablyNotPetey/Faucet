//priority: 100
const $Easing = Java.loadClass('team.lodestar.lodestone.systems.easing.Easing')

global.assignEasing = function(easeData) {
    switch(easeData) {
        case 'SINE_IN': {
            return $Easing.SINE_IN
        }
        case 'SINE_OUT': {
            return $Easing.SINE_OUT
        }
        case 'SINE_IN_OUT': {
            return $Easing.SINE_IN_OUT
        }

        case 'QUAD_IN': {
            return $Easing.QUAD_IN
        }
        case 'QUAD_OUT': {
            return $Easing.QUAD_OUT
        }
        case 'QUAD_IN_OUT': {
            return $Easing.QUAD_IN_OUT
        }

        case 'CUBIC_IN': {
            return $Easing.CUBIC_IN
        }
        case 'CUBIC_OUT': {
            return $Easing.CUBIC_OUT
        }
        case 'CUBIC_IN_OUT': {
            return $Easing.CUBIC_IN_OUT
        }

        case 'QUARTIC_IN': {
            return $Easing.QUARTIC_IN
        }
        case 'QUARTIC_OUT': {
            return $Easing.QUARTIC_OUT
        }
        case 'QUARTIC_IN_OUT': {
            return $Easing.QUARTIC_IN_OUT
        }

        case 'QUINTIC_IN': {
            return $Easing.QUINTIC_IN
        }
        case 'QUINTIC_OUT': {
            return $Easing.QUINTIC_OUT
        }
        case 'QUINTIC_IN_OUT': {
            return $Easing.QUINTIC_IN_OUT
        }

        case 'EXPO_IN': {
            return $Easing.EXPO_IN
        }
        case 'EXPO_OUT': {
            return $Easing.EXPO_OUT
        }
        case 'EXPO_IN_OUT': {
            return $Easing.EXPO_IN_OUT
        }

        case 'CIRC_IN': {
            return $Easing.CIRC_IN
        }
        case 'CIRC_OUT': {
            return $Easing.CIRC_OUT
        }
        case 'CIRC_IN_OUT': {
            return $Easing.CIRC_IN_OUT
        }

        default: {
            return $Easing.LINEAR
        }
    }
}