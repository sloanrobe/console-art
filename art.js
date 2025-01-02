// TODO Add functionality for drawing shapes
function drawLineOfStars(length) {
    
    let rowOfStars = ''
    
    for (let starCount = 0; starCount < length; starCount++) {
        rowOfStars = rowOfStars + '*'
    }
    
    console.log(rowOfStars)

    if (answer === triangle) {
        function drawTriangle(height) {
            for (let rowCount = 1; rowCount <= height; rowCount++) {
                drawLineOfStars(rowCount)
            }
        }
    } else if (answer === square) {
        function drawSquare(size) {
            for (let row = 0; row < size; row++) {
                let rowOfStars = '';
                for (let col = 0; col < size; col++) {
                    rowOfStars += '*';
                }
                console.log(rowOfStars);
            }
        }
    }
}