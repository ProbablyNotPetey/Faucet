//priority: 100
const malum = {

    //count currently broken: this is a bug with malum
    void_favor: (event, output, input) => {

        let inputItem = InputItem.of(input).ingredient.toJson().getAsJsonObject()
        inputItem['addProperty(java.lang.String,java.lang.Number)']('count', InputItem.of(input).count)
        
        event.custom({
            type: 'malum:favor_of_the_void',
            input: inputItem,
            output: Item.of(output)
        })
    }


}