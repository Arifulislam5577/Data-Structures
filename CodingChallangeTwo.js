/*

Coding Challenge #2 
==================
Let's continue with our football betting app! Keep using the 'game' variable from 
before. 
Your tasks: 
1. Loop over the game.scored array and print each player name to the console, 
along with the goal number (Example: "Goal 1: Lewandowski") 
2. Use a loop to calculate the average odd and log it to the console (We already 
studied how to calculate averages, you can go check if you don't remember) 
3. Print the 3 odds to the console, but in a nice formatted way, exactly like this: 
Odd of victory Bayern Munich: 1.33 
Odd of draw: 3.25 
 Odd of victory Borrussia Dortmund: 6.5 
Get the team names directly from the game object, don't hardcode them 
(except for "draw"). Hint: Note how the odds and the game objects have the 
same property names 😉 
4. Bonus: Create an object called 'scorers' which contains the names of the 
players who scored as properties, and the number of goals as the value. In this 
game, it will look like this: 
{ 
  Gnarby: 1, 
  Hummels: 1, 
  Lewandowski: 2 
} 
 
GOOD LUCK 😀


*/


const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};





//Task 1:
console.log('==========Task 1==============');
for (const [goal, player] of game.scored.entries()) {
    console.log(`Goal ${goal + 1} : ${player}`);
}


//Task 2:
console.log("==========Task 2==============");

const entry = Object.entries(game.odds)

let total = 0;
for (const value of Object.values(game.odds))  
    total += value;   

console.log('Average = '+total/entry.length);


//Task 3: 
console.log("==========Task 3==============");

for (const [team, odd] of Object.entries(game.odds)) {
    const teamStr = team === 'x' ? 'Draw' : `Victory ${game[team]} `
    
    console.log(`Odds of ${teamStr} : ${odd}`);
}

//Task 4:
console.log("==========Task 4==============");


const Scorer = {};
for (const player of Object.values(game.scored)) {
    Scorer[`${player}`] ? Scorer[`${player}`]++ : Scorer[`${player}`] = 1;
}
console.log(Scorer);


