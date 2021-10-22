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




//Create a new array by using spreed oparetor

const newTeacherArr = ['Kulsum', 'Sumon', 'Azhar', ...BRMS.teachersName];

// console.log(newTeacherArr);


//Copy array
const newArrCopy = [...BRMS.topStudent];

//Join 2 array with spreed oparetor

const myArrTwo = [...newTeacherArr, ...newArrCopy];// modern Way
//newTeacherArr.concat(newArrcopy)---old way
// console.log(myArrTwo);


// Create A NEW OBJECT USING SPREED

const newBRMS = {
    founder: 'Alkas Molla',
    foundingYear: 2013,
    ...BRMS,
    
}

console.log('-------------------------------');
console.log(newBRMS);
console.log('-------------------------------');
console.log(BRMS);