import {Weapon} from "./Weapon";

export interface Fighter{

    name : string;
    lifePoints : number;
    attack(fighter:Fighter, weapon?: Weapon):void;
    takeDamage(damage: number):void;

}