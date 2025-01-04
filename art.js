// TODO Add functionality for drawing shapes
function drawLineOfStars(length) {
    let rowOfStars = ''  
    for (let starCount = 0; starCount < length; starCount++) {
        rowOfStars = rowOfStars + '*'
    }   
    console.log(rowOfStars)   
}

function drawTriangle(dimension) {
    for (let rowCount = 1; rowCount <= dimension; rowCount++) {
        drawLineOfStars(rowCount)
    }
}

function drawSquare(dimension) {
    for (let row = 0; row < dimension; row++) {
        let rowOfStars = '';
        for (let col = 0; col < dimension; col++) {
            rowOfStars += '*';
        }
        console.log(rowOfStars);
    }
}

function drawPyramid(dimension) {
    for (let rowCount = 1; rowCount <= dimension; rowCount++) {
        const spaces = ' '.repeat(dimension - rowCount)
        const stars = '*'.repeat(2 * rowCount - 1)
        console.log(spaces + stars)
    }
}

function drawuPyramid(dimension) {
    for (let rowCount = dimension; rowCount >= 1; rowCount--) {
        const spaces = ' '.repeat(dimension - rowCount)
        const stars = '*'.repeat(2 * rowCount - 1)
        console.log(spaces + stars)
    }
}

module.exports = {
    drawTriangle,
    drawSquare,
    drawPyramid,
    drawuPyramid,
}