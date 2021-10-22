//======= OR OPARETOR SHORT CIRCUTING

/*
---- Only first truthy value will be execute
---- If at lest one value become truthy it return that truthy value
---- If there will be no truthy value then return the last falsy value
---- It reurn the first truthy value or return the last falsy value if all the value is false
*/


const obj = {
    firstName: 'Ariful',
    lastName: 'Islam',
    totalStudent: 120,

    fullName() {
        return (this.firstName +' '+ this.lastName);
    }
}

const check = obj.totalTeacher || 40;
console.log(check);

console.log(0 || 20);
console.log(0 || 20|| 30|| 'ARIF');
console.log(undefined || false || 0 || '' || null);


//======= AND OPARETOR SHORT CIRCUTING


/*
---- Only first falsy value will be execute
---- If at lest one value become falsy it return falsy value
---- If there will be no falsy value then return the last truthy value
---- It reurn the first falsy value or return the last truthy value if all the value is true
*/

// const check = obj.totalTeacher && 40;
// console.log(check);
console.log(0 && null && 'Arif');
console.log(10 && 12 && 'Arif' && undefined);
console.log(10 && 12 && 'Arif' && 'Islam');


const myName = obj.firstName && obj.lastName && obj.fullName();

console.log(myName);