//ALL ABOUT MAP

/*

---- Map is a data structure.
---- Map store value like object key value pair.
---- Map keys can be any type of data.
---- Map can be store any type of data.


*/

const myMap = new Map();
myMap.set('firstName','Ariful')
myMap.set('lastName','Islam')
myMap.set(1,'Bangladesh')
myMap.set(2,'Student')
myMap.set(true,'unmarried')
myMap.set(false,'married')
myMap.set('Roll',[10,20,30,40,50])
myMap.set('obj', {
    country: 'Bn-BD',
    language: 'Bangla'
})

const fullName = `${myMap.get("firstName")} ${myMap.get("lastName")}`;

const myArr = myMap.get('Roll');

const checkMarried =
  myMap.get(1) === "Bangladesh" && myMap.get(2) === "Student";
  
// console.log(myMap.get(checkMarried));





// Map Method

//set()
//get()

// console.log(myMap.has(1));
// console.log(myMap.delete(false));
// console.log(myMap.keys());
// console.log(myMap.size);//property
// console.log(myMap.entries());
// // console.log(myMap.clear());
// console.log(myMap);




//Iterable Map

for (const [index, value] of myArr.entries()) {
  console.log(`Index = ${index} value = ${value}`);
}



//Convert Object To Map

const allResult= {
    batchOne: {
      Aplus: 10,
      Aonly: 19,
    },
    batchTwo: {
      Aplus: 15,
      Aonly: 17,
    },
    batchThree: {
      Aplus: 22,
      Aonly: 12,
    },
}


const newObj = new Map(Object.entries(allResult));

// console.log(newObj.get('batchOne'));
  











