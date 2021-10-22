const schoolName = "Baroicha resiDential Model School";
console.log(schoolName[0]);
console.log("BRMS"[0]);
console.log("BRMS".length);
console.log("BRMS".length === schoolName.length);

console.log("==========String Method==========");

console.log(schoolName.indexOf("M"));
console.log(schoolName.lastIndexOf("M"));

console.log(schoolName.slice(schoolName.lastIndexOf(" ") + 1));

const startIndex = schoolName.indexOf("R");
const EndIndex = schoolName.indexOf(" ");

console.log(
  schoolName.slice(schoolName.indexOf("R"), schoolName.indexOf("l") + 1)
);

// convert Full name first Letter uppercase

function UpperCaseName(str) {
  const strArr = str.split(" ");
  const nameUpper = [];
  for (const str of strArr) {
    nameUpper.push(str[0].toUpperCase() + str.slice(1).toLowerCase());
  }
  console.log(nameUpper.join(" "));
}

UpperCaseName(schoolName);
UpperCaseName("md aRifUl iSLaM");



//CamelCasing 

function convertCamelCase(str) {
  const [first, second] = str.toLowerCase().trim().split("_");
  console.log(
    `${first}${second[0].toUpperCase() + second.slice(1).toLowerCase()}`
  );
}

convertCamelCase("    upper_case   ");
convertCamelCase("    md_ariful_islam");
