import Character from '../app';
import Magician from '../magician';

test('test_1', () => {
  const character1 = new Character('Spider', 'Magician');
  const result = {
    name: 'Spider',
    type: 'Magician',
    health: 100,
    level: 1,
  };
  expect(character1).toEqual(result);
});

test('test_2', () => {
  expect(() => {
    // eslint-disable-next-line no-unused-vars
    const hero = new Character('iron Man', 'iron Man');
  }).toThrow('Значение type должно содержать одно из типов: Bowman, Swordsman, Magician, Daemon, Undead, Zombie');
});

test('test_3', () => {
  expect(() => {
    // eslint-disable-next-line no-unused-vars
    const hero = new Character('S', 'Magician');
  }).toThrow('Значение name должно содержать от 2 до 10 символов');
});

test('test_4', () => {
  expect(() => {
    // eslint-disable-next-line no-unused-vars
    const hero = new Character(234, 'Magician');
  }).toThrow('Значение name не является строкой');
});

test('test_5', () => {
  const user1 = new Magician('Batman', 'Magician');
  user1.levelUp();
  expect(user1).toEqual({
    name: 'Batman',
    type: 'Magician',
    health: 100,
    level: 2,
    attack: 12,
    defence: 48,
  });
});

test('test_6', () => {
  expect(() => {
    // eslint-disable-next-line no-unused-vars
    const user2 = new Magician('Batman1', 'Magician');
    user2.level = 0;
    user2.levelUp();
  }).toThrow('Нельзя повысить левел умершего');
});

test('test_7', () => {
  const user3 = new Magician('Batman2', 'Magician');
  user3.damage(40);
  expect(user3.health).toEqual(76);
});

test('test_8', () => {
  expect(() => {
   
    const user4 = new Magician('Batman3', 'Magician');
    user4.health = -20;
    user4.damage(40);
  }).toThrow('Персонаж умер');
});
