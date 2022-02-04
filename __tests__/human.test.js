import Human from './../src/js/human.js';

describe('Human', () => {

  test('should construct a human object sans the lifeExpect property', () =>{
    let hum = new Human("myname", 28, false, 99, 99, 99);
    expect(this.name).toEqual("myname");
    expect(this.age ).toEqual(28);
    expect(this.smoker).toEqual(false);
    expect(this.activityLvl).toEqual(99);
    expect(this.combatLvl).toEqual(99);
    expect(this.intelliLvl).toEqual(99);
  });
});