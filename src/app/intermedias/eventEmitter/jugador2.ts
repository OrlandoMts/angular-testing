import { EventEmitter } from '@angular/core';
export class Player2 {
  name: string;
  hp: number;
  hpChange = new EventEmitter<number>();

  constructor(name: string, hp: number = 100) {
    this.name = name;
    this.hp = hp;
  }

  takeDamage(damage: number): void {
    damage >= this.hp ? (this.hp = 0) : (this.hp -= damage);

    this.hpChange.emit(this.hp);
  }
}
