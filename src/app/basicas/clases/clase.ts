export class Player {
    name: string;
    hp: number;

    constructor(name: string, hp: number = 100) {
        this.name = name;
        this.hp = hp;
    }

    takeDamage(damage: number): number {
      (damage >= this.hp) ? this.hp = 0 : this.hp -= damage;

      return this.hp
    }

}
