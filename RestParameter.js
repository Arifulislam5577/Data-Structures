const BRMS = {
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
    },
  },

  favouriteTeacher(teacherOne, teacherTwo) {
    return [this.teachersName[teacherOne], this.teachersName[teacherTwo]];
  },

  scholarShip({ studentOne, studentTwo, addressOne, addressTwo }) {
    console.log(
      `${this.topStudent[studentOne]} get scholarship in ${addressOne} and ${this.topStudent[studentTwo]} get scholarship in ${addressTwo}`
    );
  },
};



/* 
01: DISTRUCTURE
====================== 

Spreed Oparetor

------- Spreed Oparetor unpack the array
------- Used in right side of (=) oparetor
------- It can use anywhere
------- we can use multiple Spreed Oparetor(dis,para,argu)



Rest parameter

------- Rest parameter pack the array
------- Used in left side (=) oparetor
------- It always be the last element of distructing
------- we can't use multiple Rest parameter(dis,para,argu)


02: FUNCTION
======================

Spreed Oparetor

------- we can pass an array as a parameter with separed item
------- 




Rest parameter

------- We can pass multiple parameter using Rest parameter
------- All Parameter store in an one variable in array




*/


// =================Rest in Array
const [firstStudent, secondStudent, ...otherstudent] = BRMS.topStudent;
// console.log(firstStudent, secondStudent, otherstudent);


// =================Rest in Object

const { batchTwo, ...otherBatch } = BRMS.allResult;

// console.log(otherBatch);




function add(...numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) sum += numbers[i];
    console.log(sum);
}


const x = [100, 23, 44, 56, 77, 65, 71];

add(10, 20, 30, 30, 40);
add(...x)//using spreed oparetor

























