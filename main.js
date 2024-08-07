const { askForShape, askForDimension } = require('./input') 

async function main() {
    const shape = await askForShape()
    const dimension = await askForDimension()

    // TODO Use input to draw shapes
}

main()
