import {Enemy} from './Enemy'
import {Fighter} from "./Fighter";

export class Character implements Fighter {
    name: string;
    sex: string;
    lifePoints : number;

    constructor(name: string, sex: string, lifePoints: number) {
        this.name = name;
        this.sex = sex;
        this.lifePoints = lifePoints;
    }

    summary() {
        console.log(`\n 
        Your Player Name is ${this.name} \n
        You are a ${this.sex} \n
        You have ${this.lifePoints} life points        
        `)
    }

    attack(enemy: Fighter){
        let characterStrike =Math.floor(Math.random()*100);
        enemy.takeDamage(characterStrike);
    }

    takeDamage(damage: number) {
        this.lifePoints = this.lifePoints-(damage*0.5) ;
        console.log(`\n
            The enemy stroke with a force of ${damage}\n
            You have ${this.lifePoints} points left\n
            \n`)
    }
}