import Human from './../src/js/demo.js';

describe('Human', () => {

  test('should construct a human object sans the lifeExpect property', () =>{
    let hum = new Human(name, age, smoker, activityLvl, combatLvl, intelliLvl);
    expect(this.name).toEqual(name);
    expect(this.age ).toEqual(age);
    expect(this.smoker).toEqual(smoker);
    expect(this.activityLvl).toEqual(activityLvl);
    expect(this.combatLvl).toEqual(combatLvl);
    expect(this.intelliLvl).toEqual(intelliLvl);
  });
});