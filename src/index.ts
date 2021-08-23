import {Character} from './Character';

const prompts = require('prompts');

const questions = [
    {
        type: 'text',
        name: 'name',
        message: 'What is your player Name ?'
    },
    {
        type: 'text',
        name: 'sex',
        message: 'What is your sex ?'
    }
];

(async () => {
    const response = await prompts(questions);
    let myCharacter = new Character(response.name ,response.sex,100);

    //console.log(`Bonjour ${myCharacter.name}`)
    myCharacter.summary();

    //console.log('Ennemi en approche !');

    // => response => { username, age, about }
})();