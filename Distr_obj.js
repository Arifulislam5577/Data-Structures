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

  scholarShip({studentOne,studentTwo,addressOne,addressTwo}) {
    console.log(
      `${this.topStudent[studentOne]} get scholarship in ${addressOne} and ${this.topStudent[studentTwo]} get scholarship in ${addressTwo}`
    );
  },
};



//Schoolarship student

// const [student1, student2] = BRMS.topStudent;

const scholarshipStudent = {
  studentOne: 2,
  studentTwo: 3,
  addressOne: "India",
  addressTwo: "Pakistan",
};

BRMS.scholarShip(scholarshipStudent);


//========== Differnet name object distructing
const { name: schoolName, allResult: result } = BRMS;

// console.log(schoolName);
// console.log(result);

//=========== Default Value

const { founder = [], name: school = [] } = BRMS;

// console.log(founder, school);

//=========== Nested Object

const {
  batchThree: { Aplus, Aonly },
} = result;

// console.log(Aplus, Aonly);
