import {Warrior} from "../src/Warrior";

let warrior : Warrior = new Warrior('Hello','man',5);

test("should return 15 for add(10,5)", () => {
        expect(warrior.add(10, 5)).toBe(15);
});
