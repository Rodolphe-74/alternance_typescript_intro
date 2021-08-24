import {Character} from "./Character";
import {Fighter} from "./Fighter";

export class Wizard extends Character{

    constructor(name: string, sex: string, lifePoints: number) {
        super(name,sex,lifePoints);
        this.attackCoeff = 1.5;
    }
}