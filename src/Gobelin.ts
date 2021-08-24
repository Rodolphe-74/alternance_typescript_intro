import {Enemy} from "./Enemy";

export class Gobelin extends Enemy {

    constructor(name: string, lifePoints: number) {
        super(name,lifePoints);
        this.attackCoeff = 1;
    }
}