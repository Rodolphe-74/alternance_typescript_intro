import {Character} from './Character';
import {Enemy} from "./Enemy";
import {Wizard} from "./Wizard";
import {Warrior} from "./Warrior";
import {Gobelin} from "./Gobelin";
import {Dragon} from "./Dragon";

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
        name: 'hero',
        message: 'Wizard or Warrior ?'
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
    let myCharacter: Character;
    let myEnemy : Enemy;

    if(response.hero == 'Wizard'){
        myCharacter = new Wizard(response.name, response.sex, 100);
        myCharacter.summary();
    }
    else{
        myCharacter = new Warrior(response.name, response.sex, 150);
        myCharacter.summary();

    }

    let randomEnemy = Math.floor(Math.random()*2);
    console.log(randomEnemy);
    if(randomEnemy == 0){
        myEnemy = new Gobelin ('Francis', 50);
    }
    else{
        myEnemy = new Dragon('Michel',100);
    }

    let endGame = false;

    console.log('***********************\n| The enemy is coming |\n***********************\n');


    while(myCharacter.lifePoints>0 && myEnemy.lifePoints>0 && !endGame) {

        const wantToFight = await prompts(fights);

        if (wantToFight.fight == 'Y') {
            console.log('****************\n| Let\'s Go !!! |\n****************');
            myCharacter.attack(myEnemy);
            if (myEnemy.lifePoints < 0) {
                console.log('*****************************\n| The enemy has been defeated ! |\n*****************************\n');
            } else {
                console.log('***********************************\n| Oh !! Shit, he is coming back ! |\n***********************************\n')
                myEnemy.attack(myCharacter);
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