const tama = require('./tamagotchi.js')

console.log('player file is loaded');

var player = {
  name: "Neo",
  feedTamagotchi: function(tamagotchi) {
    tamagotchi.foodInTummy++;
    console.log('YUM!!! ' + tamagotchi.name + ' has been fed and now has: ' + tamagotchi.foodInTummy + ' in the tummy');
  },
  medicateTamagotchi: function(tamagotchi) {
    tamagotchi.health++;
    console.log(tamagotchi.name + ' has been medicated and now has health: ' + tamagotchi.health);
  },
  knockOutTamagotchi: function(tamagotchi) {
    tamagotchi.restedness++;
    console.log(tamagotchi.name + ' got some Zzzzs! Restedness: ' + tamagotchi.restedness);
  }
}; //end player


player.feedTamagotchi(tama.tama0)

player.medicateTamagotchi(tama.tama1)

player.knockOutTamagotchi(tama.tama2)

player.knockOutTamagotchi(tama.tama3)

tama.tama0.start()
