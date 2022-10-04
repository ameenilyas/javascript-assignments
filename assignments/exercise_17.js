const guestList = ["Umair", "Bilal", "Ahtisham"];

guestList.unshift("Haroon");

const middleIndex = guestList.length / 2;
guestList.splice(middleIndex, 0, "Shah Rukh");

guestList.push("Kabeer");

for (const guest of guestList) {
  console.log(`${guest}, I would like invite you at dinner.`);
}

console.log("Sorry Sir, You can invite only two people.");

while (guestList.length > 2) {
  const geust = guestList[guestList.length - 1];
  console.log(`Sorry ${geust}, I can not invite you to dinner.`);
  guestList.pop();
}

for (const guest of guestList) {
  console.log(`${guest}, You are still invited.`);
}
