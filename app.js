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

/*
Exercise 13
1. Create a `gymStatus` method in `game` to tally completed and incomplete gyms.
2. How will you iterate through the `gyms` array and update the tally? 
Remember to log the final tally.

This method should:
  - Not accept any arguments.
  - Initially create a constant `gymTally`, which is an object that has two 
    properties: `completed` and `incomplete`, both of which are initially set to 0.
  - Iterate through the objects in the `game.gyms` array and update the 
    properties on `gymTally` as follows: 
    - `completed` should count how many gyms in the array have a value of `true` 
      for their `completed` property. 
    - `incomplete` should count how many gyms in the array have a value of 
      `false` for their `completed` property.
  - Log the value of `gymTally`.
  - The method should not return anything.

For example, if five gym objects have a value of `true` on their `completed` property and three gym objects have a value of `false` on their `completed` property, the logged value would be: `{ completed: 5, incomplete: 3 }`.

Solve Exercise 13 here:
*/
console.log("Exercise 13 Output");

game.gymStatus = () => {
  const gymTally = {
    completed: 0,
    incomplete: 0,
  };
  for (let gym of game.gyms) {
    if (gym.completed) gymTally.completed++;
    else gymTally.incomplete++;
  }
  console.log(gymTally);
};

game.gymStatus();

/*
Exercise 14
1. Add a `partyCount` method to `game` that counts the number of Pokémon in your party.

This method should:
  - Not accept any arguments.
  - Count the number of Pokemon in the party.
  - return the found number of Pokemon in the party.

Solve Exercise 14 here:
*/
console.log("Exercise 14 Output:");
game.partyCount = () => {
  //number of pokemon in my party is game.party.length
  return game.party.length;
};
console.log(game.partyCount());

/*
Exercise 15
1. Now, complete gyms with a difficulty below 8. 
Reflect on how this is similar to or different from the previous gym exercises.
(change the value of `complete` in the qualifying objects from false to true).

Solve Exercise 15 here:
*/

// Since the code is being reused, it's better to convert it into a function
game.updateGymStatus = (difficulty) => {
  //now we can complete gyms based on a difficulty parameter
  for (let gym of game.gyms) {
    if (gym.difficulty < difficulty) {
      gym.completed = true;
    }
  }
};
game.updateGymStatus(8);
console.log("Exercise 12 Output:");
console.log(game.gyms);

/*
Exercise 16
1. Log the entire `game` object to the console. 
Take a moment to review the changes you've made throughout the exercises.


Solve Exercise 16 here:
*/
console.log("Exercise 16 Output");
console.log(game);

/*
Exercise 17
1. Arrange the Pokémon in `game.party` by their HP. The one with the highest HP should come first.
2. You'll need to use the `.sort()` method. How does the compare function work in sorting numbers?


Solve Exercise 17 here:
*/

console.log("Exercise 17 Output");
// the compare function returns either a positive number, negative number or zero
// if the number is negative, then the first element comes before the second
// else if the number is positive, then the second element comes before the first
// else both have the same sorted order so either could come first or second
game.party.sort((a, b) => b.hp - a.hp);
console.log(game.party);

/*
Exercise 18
Add a new property to the `game` object called `collection` and initialize its value to an empty array.

Copy the `catchPokemon` method you wrote in Exercise Twelve and paste it below. Modify it so that:
  - Ensure that no more than six Pokemon can be in the party at any time. 
    Excess Pokemon should be placed in the `game.collection` array.
  - It's up to you how to distribute Pokemon in a situation where more than six 
    would be placed into the `game.party` array.

Again, for this exercise, it's okay to have a negative number of pokeballs.

After updating the method, use it by calling it and passing in a pokemon object of your choice from the `pokemon` data to catch it.

Also, log the `game.items` array to confirm that the pokeball quantity is being decremented.

Solve Exercise 18 here:
*/

console.log("Exercise 18 Output");
console.log("Items before catching", game.items);

game.collection = [];
game.catchPokemon = (pokemonObj) => {
  game.items.find((item) => item.name === "pokeball").quantity--; //find item name matching pokeball and decrement quantity
  if (game.party.length === 6) {
    game.collection.push(pokemonObj);
  } else {
    game.party.push(pokemonObj);
  }
};

//testing the catchPokemon function
for (let i = 0; i < 6; i++) {
  let newPokemon = pokemon[i];
  if (!game.party.includes(newPokemon)) {
    // only catch the pokemon if not already
    // included in the party
    game.catchPokemon(newPokemon);
  }
}

console.log("Items after catching", game.items);
console.log("Collection", game.collection);
console.log("Party", game.party);

/*
Exercise 19
Copy the `catchPokemon` method that you just wrote above, and paste it below. 
The time has come to make it so that we cannot catch a Pokemon when we do not 
have any pokeballs to catch it with. 

Modify the method so that if there are no pokeballs a message will be displayed
 that there are not enough pokeballs to catch the desired Pokemon.

Also, ensure that the Pokemon isn't added to the `game.party` or the `game.collection`.

Solve Exercise 19 here:
*/

console.log("Exercise 19 Output");
console.log("Items before catching", game.items);
game.catchPokemon = (pokemonObj) => {
  const pokeballItem = game.items.find((item) => item.name === "pokeball");
  if (pokeballItem.quantity <= 0) {
    console.log("Not enough pokeballs to catch a pokemon");
    return; //don't add character to game.party
  }
  pokeballItem.quantity--; //find item name matching pokeball and decrement quantity
  if (game.party.length === 6) {
    game.collection.push(pokemonObj);
  } else {
    game.party.push(pokemonObj);
  }
};
//testing the catchPokemon function
for (let i = 6; i < 12; i++) {
  let newPokemon = pokemon[i];
  if (!game.party.includes(newPokemon)) {
    // only catch the pokemon if not already
    // included in the party
    game.catchPokemon(newPokemon);
  }
}
console.log("Items after catching", game.items);
console.log("Collection", game.collection);
console.log("Party", game.party);

/*
Exercise 20
Copy the `catchPokemon` method that you just wrote above, and paste it below. 
Modify is so that you can just pass in the name of a Pokemon instead of an entire object, 
and the method will look up the Pokemon from the data set for you.

The string passed in should be allowed to be any case 
(for example, if the string 'PiKacHU' is passed to the function, it should match to 'Pikachu' in the data set). 

If there is not a match, then return a string noting that the selected Pokemon does not exist.
 Ensure you do not decrement the pokeball count if an invalid Pokemon name is passed in, 
 and also ensure that the Pokemon isn't added to the `game.party` or the `game.collection`.

Solve Exercise 20 here:
*/

//give myself 5 pokeballs to test
game.items[1].quantity = 5;
console.log("Exercise 20 Output");
console.log("Items before catching", game.items);

game.catchPokemon = (pokemonName) => {
  //now pokemonObj should be a name, pokemonName

  if (typeof pokemonName !== "string") {
    console.log("Please pass a valid pokemon name(String)");
    return;
  }

  pokemonName = pokemonName.toLowerCase();
  const pokemonObj = pokemon.find(
    (pokemo) => pokemo.name.toLowerCase() === pokemonName
  ); //case insensitive check
  if (typeof pokemonObj === "undefined") {
    console.log(`${pokemonName} does not exist in the pokemon dataset`);
    return;
  }

  const pokeballItem = game.items.find((item) => item.name === "pokeball");
  if (pokeballItem.quantity <= 0) {
    console.log("Not enough pokeballs to catch a pokemon");
    return; //don't add character to game.party
  }
  pokeballItem.quantity--; //find item name matching pokeball and decrement quantity
  if (game.party.length === 6) {
    game.collection.push(pokemonObj);
  } else {
    game.party.push(pokemonObj);
  }
};
//testing the catchPokemon function
for (let i = 50; i < 57; i++) {
  let newPokemon = pokemon[i];
  if (!game.party.includes(newPokemon)) {
    game.catchPokemon(newPokemon.name);
  }
}
console.log("Items after catching", game.items);
console.log("Collection", game.collection);
console.log("Party", game.party);

/*
Exercise 21
Dynamically construct an object with the existing `pokemon` data sorted by the different pokemon types. The object will have this structure:

{
  grass: [
    { number: 1, name: 'Bulbasaur', type: 'grass', hp: 45, starter: true },
    { number: 2, name: 'Ivysaur', type: 'grass', hp: 60, starter: false },
    { number: 3, name: 'Venusaur', type: 'grass', hp: 80, starter: false },
    * more grass type Pokemon objects...
  ],
  fire: [
    { number: 4, name: 'Charmander', type: 'fire', hp: 39, starter: true },
    * more fire type Pokemon objects...
  ],
  water: [
    * water type Pokemon objects...
  ],
  * etc... until there is an array for every Pokemon type!
}

Log the object when it's constructed.

Solve Exercise 21 here:
*/
console.log("Exercise 21 Output");

const pokemonByType = {};
for (let pokemo of pokemon) {
  const type = pokemo.type;

  // check if type exists
  if (typeof pokemonByType[type] === "undefined") {
    pokemonByType[type] = [pokemo];
  } else {
    pokemonByType[type].push(pokemo);
  }
}

console.dir(pokemonByType);
