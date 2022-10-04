const myName = "Ameen Ilyas";

// this is title case generator
function titleCaseGenerator(_myName = "") {
  return _myName
    ?.split(" ")
    .map(
      (value) => value.charAt(0).toUpperCase() + value.substr(1).toLowerCase()
    )
    .join(" ");
}

const nameInUpperCase = myName.toUpperCase();
const nameInLowerCase = myName.toLowerCase();
const nameInTitleCase = titleCaseGenerator(myName);

console.log(nameInUpperCase);
console.log(nameInLowerCase);
console.log(nameInTitleCase);
