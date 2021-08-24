import {Enemy} from "./Enemy";

export class Dragon extends Enemy {

    constructor(name: string, lifePoints: number) {
        super(name,lifePoints);
        this.attackCoeff = 2;
    }
}