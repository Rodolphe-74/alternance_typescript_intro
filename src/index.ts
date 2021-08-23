const prompts = require('prompts');

const questions = [
    {
        type: 'text',
        name: 'playerName',
        message: 'What is your player Name ?'
    },
];

(async () => {
    const response = await prompts(questions);
    console.log(response)

    // => response => { username, age, about }
})();