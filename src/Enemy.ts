import {Character} from "./Character";
import {Fighter} from "./Fighter";

export class Enemy implements Fighter{

    name: string;
    lifePoints : number;

    constructor(name: string, lifePoints: number) {
        this.name = name;
        this.lifePoints = lifePoints;
    }

    attack(character: Fighter){
        let enemyStrike = Math.floor(Math.random()*100)*0.5;
        character.takeDamage(enemyStrike);
    }

    takeDamage(damage: number) {
        this.lifePoints = this.lifePoints - damage;
        console.log(`\n
            You stroke with a force of ${damage}\n
            ${this.name} has ${this.lifePoints} points left\n
            \n`)
    }
}