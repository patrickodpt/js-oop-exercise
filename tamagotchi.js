console.log('tamagotchi file is loaded');

//your class declaration here
class Tamagotchi {
  constructor(name = 'newTamagotchi') {
  this.foodInTummy = 10
  this.restedness = 10
  this.health = 10
  }
  cry() {
    this.foodInTummy -= 1
    console.log("WAH!!!")
  }
}

//create new Tamagotchis
let tama0 = new Tamagotchi("Jim")
let tama1 = new Tamagotchi("Pam")

//test out your Tamagotchies below via console.logs
tama0.cry()
tama1.cry()
