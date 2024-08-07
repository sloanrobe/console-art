import { rawlist, input  } from '@inquirer/prompts';

async function askForShape() {
    const answer = await rawlist({
        message: 'Select a shape',
        choices: [
          { name: 'Square', value: 'square' },
          { name: 'Triangle', value: 'triangle' },
          { name: 'Upside down pyramid', value: 'pyramid' },
          { name: 'Upside down pyramid', value: 'uPyramid' },
        ],
      });

    return answer
}

async function askForDimension() {
    const answer = await input({ message: 'What dimensions should the shape have?' });
    return answer
}

module.exports = { askForShape, askForDimension }
