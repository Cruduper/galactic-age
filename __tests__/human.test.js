import Human from './../src/js/human.js';

describe('Human', () => {

  let hum;
  beforeEach(() => {
    hum = new Human("myname", 28, false, 100, 100, 100, 100);
  });

  test('should construct a human object sans the lifeExpect property', () =>{
    expect( hum.name).toEqual("myname");
    expect( hum.age ).toEqual(28);
    expect( hum.smoker).toEqual(false);
    expect( hum.activityLvl).toEqual(100);
    expect( hum.combatLvl).toEqual(100);
    expect( hum.intelliLvl).toEqual(100);
    expect( hum.radProtect).toEqual(100);
  });

  test('should get a value for life expectancy when smoker === false', () =>{
    
    expect(hum.calcLifeExpect()).toEqual(100);
  });

  test('should get a value for life expectancy when smoker === true', () =>{
    hum.smoker = true;
    expect(hum.calcLifeExpect()).toEqual(85);
  });

  test("planetaryAge() method should convert earth age into age of a given planet's solar years", () =>{
    
    expect( hum.planetaryAge( hum.age, "mars") ).toEqual(14);
  });


  // test('should ', () =>{

  //   expect().toEqual();
  // });

  // test('should ', () =>{

  //   expect().toEqual();
  // });

  // test('should ', () =>{

  //   expect().toEqual();
  // });
});