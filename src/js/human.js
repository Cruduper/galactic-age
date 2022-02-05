export default class Human{

  constructor(name, age, smoker, activityLvl, combatLvl, intelliLvl, radProtect){
    this.name = name;
    this.age  = age;
    this.smoker = smoker;
    this.activityLvl = activityLvl;
    this.combatLvl = combatLvl;
    this.intelliLvl = intelliLvl;
    this.radProtect = radProtect;
    this.lifeExp = this.calcLifeExpect();
  }

  calcLifeExpect(){
    let lifeLength = 45;

    if(this.smoker === false){
      lifeLength += 15;
    }
    lifeLength += this.activityLvl * 0.1;
    lifeLength += this.combatLvl * 0.1;
    lifeLength += this.intelliLvl * 0.1;
    lifeLength += this.radProtect * 0.1;

    return lifeLength;
  }

  planetaryAge(age, userPlanet){
    const planets = [ ["Mercury", .24 ],
                      ["Venus", .62 ],
                      ["Earth", 1.0],
                      ["Mars", 1.88 ],
                      ["Jupiter", 11.86 ],  ];

    let newAge = 0;

    planets.forEach( (planet) =>{
      if( planet[0] === userPlanet ){
        newAge = Math.floor(age / planet[1]);
      }
    });
    return newAge;
  }

}