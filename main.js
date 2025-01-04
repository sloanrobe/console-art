const { input } = require('@inquirer/prompts')
const { askForShape, askForDimension } = require('./input')
const { drawTriangle, drawSquare, drawPyramid, drawuPyramid } = require('./art')

async function main() {
    const shape = await askForShape()
    const dimension = await askForDimension() 

    if (shape === 'triangle') {
        drawTriangle(dimension)
    } else if (shape === 'square') {
        drawSquare(dimension)
    } else if (shape === 'pyramid') {
        drawPyramid(dimension)
    } else if (shape === 'uPyramid') {
        drawuPyramid(dimension)
    } else {
        console.log('Please choose one of the following shapes: triangle, square, pyramid, or uPyramid.')
    }
}

main()