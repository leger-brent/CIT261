//This creates a class for an object
class Person {
  //contructor for the object
  constructor(name) {
    //fields for the object
    this.name = name;
  }
  //method for the object
  greet() {
    console.log(`Hi, my name is ` + this.name + ".");
  }
}

// The creates a class for an object that extends another class
class Hero extends Person {
  constructor(name, attack, defense, hp, mp) {
    //inherited field from parent class
    super(name);
    //extended fields for the object
    this.attack = attack;
    this.defense = defense;
    this.hp = hp;
    this.mp = mp;
  }
}

//instantiate a new Person object
var Girl = new Person("Mei");
// calls the function of the class
Girl.greet();

//instantiate a new Hero object
var Hero1 = new Hero("Vahn", 10, 10, 50, 15);
//method validating access to parent class
Hero1.greet();
//call to exteded method of the new class
console.log(Hero1.attack);