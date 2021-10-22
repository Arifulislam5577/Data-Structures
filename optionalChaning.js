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







//Optional Chaning



/*

----- before ? sign means is that part exist?
----- if it is exist then execute the next element.
----- before ? that is null or undifined then return null or undifined.

*/


console.log(BRMS.allResult.batchOne?.Aplus);
console.log(BRMS.allResult.batchFour?.Aplus);



//Works on Mehtod

console.log(BRMS.favouriteTeacher?.(2, 3) ?? 'Method Does not exist');

const student = {
    studentOne:1,
    studentTwo: 2,
    addressOne: 'USA',
    addressTwo: 'JAPAN'
};

BRMS.scholarShip?.(student)?? 'Method Does not exist';