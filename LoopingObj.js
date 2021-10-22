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


//Looping Object

/*

---- Object.entries(obj name) return the object keys and value
---- Object.keys(obj name) reurn the object keys
---- Object.values(obj name) return the object values

*/


// for (const [grade,number] of Object.entries(BRMS.allResult.batchOne)) {
//     console.log(grade);
//     console.log(number);
// }




const entries = Object.entries(BRMS.allResult);

for (const [batch,{Aplus,Aonly}] of entries) {
    console.log(`${batch} get A+ = ${Aplus} and A = ${Aonly}`);
}

