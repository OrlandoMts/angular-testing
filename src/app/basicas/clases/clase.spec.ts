import { Player } from './clase';

xdescribe('Pruebas de clase', () => {
  const player: Player = new Player('omontes');

  beforeEach(() => {
    player.hp = 100;
    console.log('beforeEach');
  });

  it('Deberia retornar 80 de hp, si recibe 20 de daño', () => {
    const resp = player.takeDamage(20);

    expect(resp).toBe(80);
  });

  it('Deberia retornar 50 de hp, si recibe 50 de daño', () => {
    const resp = player.takeDamage(50);

    expect(resp).toBe(50);
  });

  it('Deberia retornar 0 de hp, si recibe 100 de daño', () => {
    const resp = player.takeDamage(100);

    expect(resp).toBe(0);
  });
});
