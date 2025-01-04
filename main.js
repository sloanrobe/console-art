const { input } = require('@inquirer/prompts')
const { askForShape, askForDimension } = require('./input') 

async function main() {
    const shape = await askForShape()
    const dimension = await askForDimension() 
}

// TODO Use input to draw shapes

if (input === 'triangle') {
    drawTriangle(dimension)
} else if (input === 'square') {
    drawSquare(dimension)
} else if (input === 'pyramid') {
    drawPyramid(dimension)
} else if (input === 'uPyramid') {
    drawuPyramid(dimension)
} else {
    console.log('Please choose one of the following shapes: triangle, square, pyramid, or uPyramid.')
}

main()