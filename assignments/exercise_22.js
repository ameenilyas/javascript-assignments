// any list
const guestList = ["Umair", "Bilal", "Ahtisham"];

function printSports(params) {
  try {
    const sports = guestList[3]?.sports;

    // would throw an error if not check
    if (sports) return console.log(sports);

    guestList.push({ sports: "Cricket" });
    const updatedSports = guestList[3].sports;

    console.log(updatedSports);
  } catch (error) {
    console.log(error);
  }
}
printSports();
