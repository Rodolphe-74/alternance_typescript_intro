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
}