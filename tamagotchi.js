console.log('tamagotchi file is loaded');

//your class declaration here
class Tamagotchi {
  constructor(name = 'JOHN', creatureType = 'DOE') {
  this.foodInTummy = 10
  this.restedness = 10
  this.health = 10
  this.name = name
  this.creatureType = creatureType
  }
  cry() {
    this.foodInTummy -= 1
    console.log(`${this.name} has ${this.foodInTummy} food left in tummy.`);
    console.log(`${this.name} is unhappy! WAH!!!`)
  }
  puke() {
    this.foodInTummy -= 1
    console.log(`${this.name} puked up some food. It has ${this.foodInTummy}
      left in tummy. WAHHHHH!`);
  }
  yawn() {
    this.restedness -= 1
    console.log(`${this.name} has current restedness of: ${this.restedness}`)
  }
}

//create new Tamagotchis
let tama0 = new Tamagotchi('Jim', 'salesman')
let tama1 = new Tamagotchi('Pam', 'artist')
let tama2 = new Tamagotchi('Dwight', 'farmer')
let tama3 = new Tamagotchi('M. Scott', 'manager')

//test out your Tamagotchies below via console.logs
tama0.cry()
tama1.cry()
tama2.puke()
tama3.yawn()
