const guestList = ["Umair", "Bilal", "Ahtisham"];

guestList.unshift("Haroon");

const middleIndex = guestList.length / 2;
guestList.splice(middleIndex, 0, "Shah Rukh");

guestList.push("Kabeer");

for (const guest of guestList) {
  console.log(`${guest}, I would like invite you at dinner.`);
}
