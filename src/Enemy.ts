import {Character} from "./Character";
import {Fighter} from "./Fighter";

export abstract class Enemy implements Fighter{

    name: string;
    lifePoints : number;
    attackCoeff: number;

    protected constructor(name: string, lifePoints: number) {
        this.name = name;
        this.lifePoints = lifePoints;
        this.attackCoeff = 1;
    }

    attack(character: Fighter){
        let enemyStrike = Math.floor(Math.random()*50) * 0.5 * this.attackCoeff;
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