// ALL ABOUT SETS

/*
--- Sets is a collection of unique values.
--- Sets never have any duplicate value.
--- Sets can hold mixed data types.
--- Sets does not have any Index Number.
--- Sets are also iterable.
--- Main usecase of Sets is remove duplicate value.

*/

const mixed = new Set([
  "Sakib",
  "Musfiq",
  "Tamim",
  "Tamim",
  false,
  true,
  true,
  12,
  12,
  30,
  30,
  null,
  null,
  undefined,
]);

// console.log(mixed);

//Sets Method
console.log("========== Set Method =============");
// console.log(mixed.size);
// console.log(mixed.has(12));
// console.log(mixed.has(120));
// console.log(mixed.add('Arif'));
// console.log(mixed.delete('Arif'));
// console.log(mixed.clear());
// console.log(mixed);

//Sets is iterables
for (const value of mixed) {
  console.log(value);
}

//Remove duplicate value from an array

const myArr = [10, 10, 20, 30, 40, 40, 50, 10, 50, 60, 70];



// This is another way of remove duplicate value

const newArr = [];
for (let i = 0; i < myArr.length; i++){
    if (newArr.includes(myArr[i])) 
        continue;
    else
        newArr.push(myArr[i])
}

console.log(newArr);


// It is modern way

const newArr2 = [...new Set(myArr)];
console.log(newArr2);

