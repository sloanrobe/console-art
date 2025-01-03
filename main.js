const { askForShape, askForDimension } = require('./input') 

async function main() {
    const shape = await askForShape()
    const dimension = await askForDimension()

    // TODO Use input to draw shapes
}

if (answer === triangle) {
    drawTriangle(dimension)
} else if (answer === square) {
    drawSquare(dimension)
} else if (answer === pyramid) {
    drawPyramid(dimension)
} else if (answer === uPyramid) {
    drawuPyramid(dimension)
} else {
    console.log('Please choose one of the following shapes: triangle, square, pyramid, or uPyramid.')
}

main()
