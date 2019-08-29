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
}

//create new Tamagotchis
let tama0 = new Tamagotchi('Jim', 'salesman')
let tama1 = new Tamagotchi('Pam', 'artist')

//test out your Tamagotchies below via console.logs
tama0.cry()
tama1.cry()
