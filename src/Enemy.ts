import {Character} from "./Character";

export class Enemy {
    name: string;
    lifePoints : number;

    constructor(name: string, lifePoints: number) {
        this.name = name;
        this.lifePoints = lifePoints;
    }

    attack (character: Character){
        let enemyStrike = Math.floor(Math.random()*100)*0.5;
        character.lifePoints = character.lifePoints - enemyStrike;
        console.log(`\n
            The enemy stroke with a force of ${enemyStrike}\n
            You have ${character.lifePoints} points left\n
            \n`)

    }
}