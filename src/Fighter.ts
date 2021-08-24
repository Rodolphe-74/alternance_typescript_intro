export interface Fighter{
    name : string;
    lifePoints : number;
    attack(fighter:Fighter):void;
    takeDamage(damage: number):void;
}