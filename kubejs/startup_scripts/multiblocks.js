//priority: 100

const $PatchouliAPI = Java.loadClass('vazkii.patchouli.api.PatchouliAPI')
const $Character = Java.loadClass('java.lang.Character')

const ARTIFICIAL_WEEPING_WELL_MULTIBLOCK = () => $PatchouliAPI.get().makeMultiblock(
    [
        [
            'S___S',
            '_____',
            '_____',
            '_____',
            'S___S'
        ],
        [
            'P___P',
            '_____',
            '_____',
            '_____',
            'P___P'
        ],
        [
            'C___C',
            '_____',
            '_____',
            '_____',
            'C___C'
        ],
        [
            '_THT_',
            'T   T',
            'H   H',
            'T   T',
            '_THT_'
        ],
        [
            '_RRR_',
            'RBBBR',
            'RB0BR',
            'RBBBR',
            '_RRR_'
        ],
        [
            '_RRR_',
            'RBBBR',
            'RBBBR',
            'RBBBR',
            '_RRR_'
        ],
        [
            '_RRR_',
            'RBBBR',
            'RBBBR',
            'RBBBR',
            '_RRR_'
        ],
        [
            '_RRR_',
            'RBBBR',
            'RBBBR',
            'RBBBR',
            '_RRR_'
        ],
        [
            '_____',
            '_RRR_',
            '_RRR_',
            '_RRR_',
            '_____'
        ]
    ],
    new $Character('S'), Block.getBlock('malum:block_of_soulstone'),
    new $Character('P'), Block.getBlock('malum:twisted_rock_column_cap'),
    new $Character('C'), Block.getBlock('malum:twisted_rock_column'),
    new $Character('T'), Block.getBlock('malum:tainted_rock_tiles'),
    new $Character('H'), Block.getBlock('malum:chiseled_tainted_rock'),
    new $Character('R'), Block.getBlock('malum:twisted_rock'),
    new $Character('B'), Block.getBlock('malum:blighted_soil'),
    new $Character('0'), Block.getBlock('malum:blighted_soil')
)



// allow server scripts to access
global.MULTIBLOCKS = {
    ARTIFICIAL_WEEPING_WELL: ARTIFICIAL_WEEPING_WELL_MULTIBLOCK,
}

StartupEvents.init(event => {

    $PatchouliAPI.get().registerMultiblock(ResourceLocation('faucet:artificial_weeping_well'), ARTIFICIAL_WEEPING_WELL_MULTIBLOCK())


})