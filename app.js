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
  if (start.starter == true && start.type === "fire") {
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
// I will consider different types of pokemon+ only add if hp>80
let hasWater = false;
let hasGround = false;
let hasGrass = false;
let count = 0;
for (let pokemo of pokemon) {
  if (count === 3) break;
  if (pokemo.hp > 80) {
    if (pokemo.type === "water" && !hasWater) {
      game.party.push(pokemo);
      hasWater = true;
      count++;
    } else if (pokemo.type === "ground" && !hasGround) {
      game.party.push(pokemo);
      hasGround = true;
      count++;
    } else if (pokemo.type === "grass" && !hasGrass) {
      game.party.push(pokemo);
      hasGrass = true;
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

/*
Exercise 7
1. Evolve the starter Pokémon you added to your party earlier. Each starter Pokémon evolves into a specific one.
2. How would you replace the current starter Pokémon in your party with its evolved form?

Hint: 
  - Pokemon 1: Bulbasaur evolves into Pokemon 2: Ivysaur
  - Pokemon 4: Charmander evolves into Pokemon 5: Charmeleon
  - Pokemon 7: Squirtle evolves into Pokemon 8: Wartortle
  - Pokemon 25: Pikachu evolves into Pokemon 26: Raichu

More Hints: The existing starter Pokemon will be *replaced* in your party with the Pokemon it evolved into. When working with an array of objects, the splice() array method is ideal for replacing one element with another. 


Solve Exercise 7 here:
*/
for (let i = 0; i < game.party.length; i++) {
  let start = game.party[i];
  if (start.starter === true) {
    //Although we know the starter is at the first position, we want to make sure we have the right pokemon even if the array is modified
    let start = game.party[i];
    game.party.splice(i, 1, pokemon[start.number]);
  }
}
console.log("Exercise 7 Output:");
console.log(game.party);

/*
Exercise 8
1. Print the name of each Pokémon in your party.
2. Consider using a loop or an array method to access each Pokémon's name.

Solve Exercise 8 here:
*/

console.log("Exercise 8 Output");
//JS has an array method called map() that lets us do this easily
//It maps from a pokemon object to a pokemon name
console.log(game.party.map((pokemo) => pokemo.name));

/*
Exercise 9
1. Can you print out all the starter Pokémon from the `pokemon` array?
2. Think about how you can identify a starter Pokémon and then log their names.


Solve Exercise 9 here:
*/

console.log("Exercise 9 Output");
for (let pokemo of pokemon) {
  if (pokemo.starter === true) {
    console.log(pokemo.name);
  }
}

/*
Exercise 10
Create a method called `catchPokemon` and add it to the `game` object.
You should not need to edit the original game object directly. This method should:
  - Accept an object as a parameter called `pokemonObj`
  - Add the `pokemonObj` to the `game.party` array.
  - not return anything

After writing this method, call it and pass in a Pokemon object of your choice from the `pokemon` data to catch it.

Solve Exercise 10 here:
*/

console.log("Exercise 10 Output");
game.catchPokemon = (pokemonObj) => {
  game.party.push(pokemonObj);
};

game.catchPokemon(pokemon[24]);
console.log(game.party);

/*
Exercise 11
1. Copy the `catchPokemon` method that you just wrote above, and paste it below. 
Modify it so that it also decreases the number of pokeballs in your inventory each time you catch a Pokémon.
2. How will you find and update the quantity of pokeballs in the `game.items` array?

Tips:
For this exercise, it's okay to have a negative number of pokeballs.
After updating the method, call it and pass in a Pokemon object of your choice from the `pokemon` data to catch it.
Also, log the `game.items` array to confirm that the pokeball quantity is being decremented.

Solve Exercise 11 here:
*/
console.log("Exercise 11 Solution");
console.log("Before catching a pokemon:");
console.log(game.items);
game.catchPokemon = (pokemonObj) => {
  game.party.push(pokemonObj);
  // game.items[1]].quantity--;
  game.items.find((item) => item.name === "pokeball").quantity--; //find item name matching pokeball and decrement quantity
};
console.log("After catching a pokemon:");
game.catchPokemon(pokemon[50]);
console.log(game.items);

/*
Exercise 12
1. Similar to Exercise 6, now complete gyms with a difficulty below 6. How will you approach this?
 (change the value of `complete` in the qualifying objects from false to true).

Solve Exercise 12 here:
*/
for (let gym of game.gyms) {
  if (gym.difficulty < 6) {
    gym.completed = true;
  }
}
console.log("Exercise 12 Output:");
console.log(game.gyms);
