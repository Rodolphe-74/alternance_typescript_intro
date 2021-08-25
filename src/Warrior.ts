import {Character} from "./Character";

export class Warrior extends Character{

    constructor(name: string, sex: string, lifePoints: number) {
        super(name,sex,lifePoints);
        this.attackCoeff = 1;
    }
    add(x:number,y:number):number{
        return x + y;
    }
}