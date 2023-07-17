import { Player2 } from './jugador2';

describe('Player 2 eventEmitter', () => {
  let player: Player2;

  beforeEach(() => (player = new Player2('omontes', 100)));

  it('Debe emitir un evento cuando recibe daño', () => {
    let newHp: number = 0;
    player.hpChange.subscribe((hp) => (newHp = hp));
    player.takeDamage(100);

    expect(newHp).toBe(0);
  });

  it('Debe emitir un evento cuando recibe daño y sobrevivir', () => {
    let newHp: number = 0;
    player.hpChange.subscribe((hp) => (newHp = hp));
    player.takeDamage(50);

    expect(newHp).toBe(50);
  });
});
