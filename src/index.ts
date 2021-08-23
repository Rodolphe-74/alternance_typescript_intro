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
    }
];

const fights = [
    {
        type: 'text',
        name: 'fight',
        message: 'Do you want to fight ? (Y/N)'
    }
];

(async () => {
    const response = await prompts(questions);
    let myCharacter = new Character(response.name, response.sex, 1000);
    let sillyBoy = new Enemy('sillyBoy', 50);
    let endGame = false;
    //console.log(`Bonjour ${myCharacter.name}`)
    myCharacter.summary();
    console.log('***********************\n| The enemy is coming |\n***********************\n');


    while(myCharacter.lifePoints>0 && sillyBoy.lifePoints>0 && !endGame) {

        const wantToFight = await prompts(fights);

        if (wantToFight.fight == 'Y') {
            console.log('****************\n| Let\'s Go !!! |\n****************');
            myCharacter.attack(sillyBoy);
            if (sillyBoy.lifePoints < 0) {
                console.log('*****************************\n| The enemy has been defeated ! |\n*****************************\n');
            } else {
                console.log('***********************************\n| Oh !! Shit, he is coming back ! |\n***********************************\n')
                sillyBoy.attack(myCharacter);
                if (myCharacter.lifePoints < 0) {
                    console.log('**************\n| Game Over ! |\n**************\n');
                }
            }
        } else {
            endGame = true;
            console.log('**************\n| Game Over ! |\n**************\n');
        }
    }

    // => response => { username, age, about }
})();