import {Character} from './Character';
import {Enemy} from "./Enemy";

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
    },
    {
        type: 'text',
        name: 'fight',
        message: 'Do you want to fight ? (Y/N)'
    }
];

(async () => {
    const response = await prompts(questions);
    let myCharacter = new Character(response.name ,response.sex,100);
    let sillyBoy = new Enemy ('sillyBoy',50);
    //console.log(`Bonjour ${myCharacter.name}`)
    myCharacter.summary();

    console.log('Ennemi en approche !');

    if (response.fight =='Y') {
        console.log('Let\'s Go !!! ');
        myCharacter.attack(sillyBoy);
    }
    else{
        console.log('Game Over')
    }

    // => response => { username, age, about }
})();