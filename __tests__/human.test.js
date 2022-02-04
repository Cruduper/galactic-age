import Human from './../src/js/human.js';

describe('Human', () => {

  let hum;
  beforeEach(() => {
    hum = new Human("myname", 28, false, 99, 99, 99);
  });

  test('should construct a human object sans the lifeExpect property', () =>{
    expect( hum.name).toEqual("myname");
    expect( hum.age ).toEqual(28);
    expect( hum.smoker).toEqual(false);
    expect( hum.activityLvl).toEqual(99);
    expect( hum.combatLvl).toEqual(99);
    expect( hum.intelliLvl).toEqual(99);
  });

  // test('should get a value for life expectancy', () =>{
  //   hum
  //   expect().toEqual();
  // });
  // test('should ', () =>{

  //   expect().toEqual();
  // });
  // test('should ', () =>{

  //   expect().toEqual();
  // });
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