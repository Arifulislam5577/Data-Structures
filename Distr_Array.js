const myArr = {
  name: "Baroicha Residential Model School",
  location: ["Baroicha", "Belabo", "Narsingdi"],
  teachersName: ["Aziz", "Shopon", "Shohel", "Romana", "Papiya", "Lotifa"],
  topStudent: ["Rohan", "Eva", "Mridul", "Moni", "Shanto", "Poly", "Tamim"],
  allResult: {
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
    }
  },

  favouriteTeacher(teacherOne, teacherTwo) {
    return [this.teachersName[teacherOne], this.teachersName[teacherTwo]];
  },
};


//Get Element from an array with distructing
const [, , zila] = myArr.location;
// console.log(zila);

//Swap variable

let [first, second] = myArr.topStudent;



//=========process 1:

// let temp = first;
// first = second;
// second = temp;

//=========process 2:

// [first, second] = [second, first];
// console.log(first,second);


//=========Recive 2 return values from a fucntion:

const [one, two] = myArr.favouriteTeacher(0, 3);
 
// console.log(one,two);





//================Nested Array Distructure

const nestedArr = [12,23,[54,6,56,17],61,34]

const [a, b, [c, d, e, f]] = nestedArr;
// console.log(a,b,c,d,e,f);


//================Default Value

const rollNumber = [20, 40, 50];
const [abul, babul, cabul = 10] = rollNumber;

console.log(abul, babul, cabul);

