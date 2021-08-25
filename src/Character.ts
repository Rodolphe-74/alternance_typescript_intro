import {Enemy} from './Enemy'
import {Fighter} from "./Fighter";
import {Weapon} from "./Weapon";

export abstract class Character implements Fighter {
    name: string;
    sex: string;
    lifePoints : number;
    attackCoeff: number;

    protected constructor(name: string, sex: string, lifePoints: number) {
        this.name = name;
        this.sex = sex;
        this.lifePoints = lifePoints;
        this.attackCoeff = 1;
    }

    summary() {
        console.log(`\n 
        Your Player Name is ${this.name} \n
        You are a ${this.sex} \n
        You have ${this.lifePoints} life points        
        `)
    }

    attack(enemy: Fighter, weapon?: Weapon){
        if(weapon) {
            enemy.takeDamage(weapon.damage);
        }
        else {
            let characterStrike = Math.floor(Math.random() * 50) * this.attackCoeff;
            enemy.takeDamage(characterStrike);
        }
    }

    takeDamage(damage: number) {
        this.lifePoints = this.lifePoints-(damage*0.5) ;
        console.log(`\n
            The enemy stroke with a force of ${damage}\n
            You have ${this.lifePoints} points left\n
            \n`)
    }
}