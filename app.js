const pokemon = require("./data.js");
const game = {
  party: [],
  gyms: [
    { location: "Pewter City", completed: false, difficulty: 1 },
    { location: "Cerulean City", completed: false, difficulty: 2 },
    { location: "Vermilion City", completed: false, difficulty: 3 },
    { location: "Celadon City", completed: false, difficulty: 4 },
    { location: "Fuchsia City", completed: false, difficulty: 5 },
    { location: "Saffron City", completed: false, difficulty: 6 },
    { location: "Cinnabar Island", completed: false, difficulty: 7 },
    { location: "Viridian City", completed: false, difficulty: 8 },
  ],
  items: [
    { name: "potion", quantity: 4 },
    { name: "pokeball", quantity: 8 },
    { name: "rare candy", quantity: 99 },
  ],
};

//Exercise 1
//console.dir(pokemon, { maxArrayLength: null });
//log name of pokemon number 59
console.log(`Exercise 1 Output: ${pokemon[58].name}`);

//Exercise 2
//console.log(game);

/*
Exercise 3
1. Add a new property to the `game` object. Let's call it "difficulty".
2. Choose a value for "difficulty" that you think fits the game. Ex: "Easy", "Med" or "Hard". How would you assign it?


Solve Exercise 3 here:
*/

game.difficulty = "Easy";
console.log("Exercise 3 Output");
console.log(game); //check if difficulty is added to game

/*
Exercise 4
1. Select a starter Pokémon from the `pokemon` array. Remember, a starter Pokémon's `starter` property is true.
2. Add this Pokémon to the `game.party` array. Which array method will you use to add them?


Solve Exercise 4 here:
*/
console.log("Exercise 4 Output:");
console.log("game.party array before adding starter pokemon:");
console.log(game.party);
for (let start of pokemon) {
  if (start.starter == true) {
    game.party.push(start);
  }
}
console.log("game.party array after adding starter pokemon:");
console.log(game.party);

/*
Exercise 5
1. Choose three more Pokémon from the `pokemon` array and add them to your party.
2. Consider different attributes like 'type' or 'HP' for your selection. Which array method will you use to add them?


Solve Exercise 5 here:
*/
// I will consider different types of pokemon+ only add if hp>70
let hasPsychic = false;
let hasGround = false;
let hasFighting = false;
let count = 0;
for (let pokemo of pokemon) {
  if (count === 3) break;
  if (pokemo.hp > 70) {
    if (pokemo.type === "psychic" && !hasPsychic) {
      game.party.push(pokemo);
      hasPsychic = true;
      count++;
    } else if (pokemo.type === "ground" && !hasGround) {
      game.party.push(pokemo);
      hasGround = true;
      count++;
    } else if (pokemo.type === "fighting" && !hasFighting) {
      game.party.push(pokemo);
      hasFighting = true;
      count++;
    }
  }
}
console.log("Exercise 5 Output:");
console.log(game.party);

/*
Exercise 6
1. Set the `completed` property to true for gyms with a difficulty below 3.
2. Think about how you'd loop through the `gyms` array to check and update the `completed` property.


Solve Exercise 6 here:
*/
//console.log(game.gyms);
for (let gym of game.gyms) {
  if (gym.difficulty < 3) {
    gym.completed = true;
  }
}
console.log("Exercise 6 Output:");
console.log(game.gyms);
