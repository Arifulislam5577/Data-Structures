const obj = {
  firstName: "Ariful",
  lastName: "Islam",
  totalStudent: 120,
  buetChan: 0,

  fullName() {
    return this.firstName + " " + this.lastName;
  },
};

//=====The Nullish Coalescing Operator (??)

/*

----- null and undifined are the nullish value
----- 0 and '' is the truthy value for nullish oparetor
----- if value is only null or undifined then default value execute
----- if value is 0 or '' then nullish operator return 0 or the '' string
----- It is ES2020 feature of modern Javascript

*/



// const chanceBuet = obj.buetChan || 5;
const chanceBuet = obj.buetChan ?? 5;
console.log(chanceBuet);