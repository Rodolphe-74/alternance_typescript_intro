import {Enemy} from './Enemy'

export class Character {
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

    attack(enemy: Enemy){
        let strike =Math.floor(Math.random()*100);
        enemy.lifePoints = enemy.lifePoints-strike ;
        console.log(`\n
            You stroke with a force of ${strike}\n
            ${enemy.name} has ${enemy.lifePoints} points left\n
            \n`)
    }
}