//mostly focused on knaves' needs, which does not have a base damage modifier for some reason

const modifiers = {
    'twilight_fores/fiery': 0.0,
    'twilight_fores/ironwood': 0.0,
    'twilight_fores/knightmetal': 0.0,
    'twilight_fores/steeleaf': -1.0,
    'undergarden/cloggrum': 0.0,
    'undergarden/forgotten': 0.0,
    'undergarden/froststeel': 0.0,
    'undergarden/utherium': 0.0,
    'forbidden_arcanus/deorum': 0.0,
    'forbidden_arcanus/draco_arcanus': 4.0,
    'forbidden_arcanus/reinforced_deorum': 0.0
}

ItemEvents.modification(event => {

    let weaponSuffix = [
        'longsword',
        'twinblade',
        'rapier',
        'katana',
        'sai',
        'spear',
        'glaive',
        'warglaive',
        'cutlass',
        'claymore',
        'greathammer',
        'greataxe',
        'chakram',
        'scythe',
        'halberd'
    ]


    for(let material in modifiers) {
        if (modifiers.hasOwnProperty(material)) {

            weaponSuffix.forEach(suffix => {
                let id = 'knavesneeds:' + material + '/' + suffix
                event.modify(Item.of(id), item => {

                    console.log(id + ' before damage: ' + item.attackDamage)
                    item.attackDamage += modifiers[material]
                    console.log(id + ' after damage: ' + item.attackDamage)
                })

            })

        }
    }
})