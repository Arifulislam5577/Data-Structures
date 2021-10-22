const allResult = {
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
};


// Inhance Object Literal
const myArr = {
  name: "Baroicha Residential Model School",
  location: ["Baroicha", "Belabo", "Narsingdi"],
  teachersName: ["Aziz", "Shopon", "Shohel", "Romana", "Papiya", "Lotifa"],
  topStudent: ["Rohan", "Eva", "Mridul", "Moni", "Shanto", "Poly", "Tamim"],
  allResult,
  favouriteTeacher(teacherOne, teacherTwo) {
    return [this.teachersName[teacherOne], this.teachersName[teacherTwo]];
  },
};


console.log(myArr);