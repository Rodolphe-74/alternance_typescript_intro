import {Character} from './Character';
import {Enemy} from "./Enemy";
import {Wizard} from "./Wizard";
import {Warrior} from "./Warrior";
import {Gobelin} from "./Gobelin";
import {Dragon} from "./Dragon";
import {Weapon} from "./Weapon";
import axios from "axios";

const prompts = require('prompts');

//===========================  Définition des questions  ===================================
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
    },
    {
        type: 'text',
        name: 'weapon',
        message: 'Do You want to choose a weapon ? (Y/N)'
    },
];

const weaponChoice = [
    {
        type: 'text',
        name: 'choice',
        message: 'Write your choice :\n' +
            'Revolver\n' +
            'Bazooka\n' +
            'Nuclear Bomb\n'

/* Syntaxe pour faire un select qui est visuellement plus joli. Problème avec le choix des solutions dans le terminal ubuntu.
        choices : [
            { title: 'Revolver', value:'Revolver' },
            { title: 'Bazooka', value:'Bazooka' },
            { title: 'Revolver', value:'Revolver' }
        ]

 */
    }
]

const fights = [
    {
        type: 'text',
        name: 'fight',
        message: 'Do you want to fight ? (Y/N)'
    }
];


//===========================  Lancement du jeu  =================================
(async () => {
    const response = await prompts(questions); // Appel des questions
    // Création des personnages et armes
    let myCharacter: Character;
    let myEnemy : Enemy;
    let weapon : Weapon;


    // Traitement de la réponse à la question du choix des armes
    if(response.weapon == 'Y'){
        const weaponResponse = await prompts(weaponChoice);
        if(weaponResponse.choice == 'Revolver'){
            weapon = new Weapon(weaponResponse.choice,10);
        }
        else if (weaponResponse.choice == 'Bazooka'){
            weapon = new Weapon(weaponResponse.choice,30);
        }
        else {
            weapon = new Weapon(weaponResponse.choice,50);
        }
    }
    else{
        weapon = new Weapon('No Weapon',0);
    }


    // Choix du personnage suivant la réponse du joueur. Instanciation et résumé des caractéristiques
    if(response.hero == 'Wizard'){
        myCharacter = new Wizard(response.name, response.sex, 100);
        myCharacter.summary();
    }
    else{
        myCharacter = new Warrior(response.name, response.sex, 150);
        myCharacter.summary();
    }

    // Choix d'un ennemi aléatoirement
    let randomEnemy = Math.floor(Math.random()*2);
    if(randomEnemy == 0){
        myEnemy = new Gobelin ('Francis', 50);
    }
    else{
        myEnemy = new Dragon('Michel',100);
    }

    // Variable de jeu pour déterminer si la boucle continue ou non
    let endGame = false;

    console.log('***********************\n| The enemy is coming |\n***********************\n');

    // Boucle de Jeu
    while(myCharacter.lifePoints>0 && myEnemy.lifePoints>0 && !endGame) {

        const wantToFight = await prompts(fights);

        if (wantToFight.fight == 'Y') {
            console.log('****************\n| Let\'s Go !!! |\n****************');
            if(weapon.name == 'No Weapon'){
                myCharacter.attack(myEnemy);
            }
            else{
                myCharacter.attack(myEnemy, weapon);

            }
            if (myEnemy.lifePoints < 0) {
                console.log('*********************************\n| The enemy has been defeated ! |\n*********************************\n');
            } else {
                console.log('***********************************\n| Oh !! Shit, he is coming back ! |\n***********************************\n')
                myEnemy.attack(myCharacter);
                if (myCharacter.lifePoints < 0) {
                    console.log('**************\n| Game Over ! |\n**************\n');
                }
            }
        } else {
            await getCitation();
            endGame = true;
            console.log('**************\n| Game Over ! |\n**************\n');
        }
    }

    // => response => { username, age, about }


})();


//Définition de la fonction qui va récupérer les citations grâce à axios
async function getCitation() {
    try {
        const response = await axios.get('https://kaamelott.hotentic.com/api/random/personnage/Le%20Ma%C3%AEtre%20d\'Armes');
        console.log(response.data.citation.citation);
    } catch (error) {
        console.error(error);
    }
}

